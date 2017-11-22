const Sequelize = require('sequelize')
const db = require ('../db')

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
  }
})

module.exports = RestaurantUser
