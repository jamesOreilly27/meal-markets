const Sequelize = require('sequelize')
const db = require('../db')
const { Restaurant } = require('../models')

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
  image: {
    type: Sequelize.STRING
  }
}, {
  scopes: {
    restaurant: {
      include: [{ model: Restaurant }]
    }
  }
})

module.exports = Meal
