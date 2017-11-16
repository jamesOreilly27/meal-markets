const Sequelize = require('sequelize')
const db = require('../db')

const Meal = db.define('meal', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  inStorePrice: {
    type: Sequelize.INTERGER, //Use an integer to represent the number of cents in our price.
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Meal
