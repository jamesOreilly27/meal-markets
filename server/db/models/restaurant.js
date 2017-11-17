const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Restaurant
