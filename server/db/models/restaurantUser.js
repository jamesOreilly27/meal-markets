const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const RestaurantUser = db.define('restaurantUser', {
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = RestaurantUser

RestaurantUser.prototype.correctPassword = function (candidatePwd) {
  return RestaurantUser.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
RestaurantUser.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

RestaurantUser.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = RestaurantUser.generateSalt()
    user.password = RestaurantUser.encryptPassword(user.password, user.salt)
  }
}

RestaurantUser.beforeCreate(setSaltAndPassword)
RestaurantUser.beforeUpdate(setSaltAndPassword)
