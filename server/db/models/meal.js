const Sequelize = require('sequelize')
const db = require('../db')

const Meal = db.define('meal', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  inStorePrice: {
    type: Sequelize.INTEGER, //Use an integer to represent the number of cents in our price.
    allowNull: false
  },
  basePrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pickupDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isAfter: (new Date() - 86400000)
    }
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Meal
