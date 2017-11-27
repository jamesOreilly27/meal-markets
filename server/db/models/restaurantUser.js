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
