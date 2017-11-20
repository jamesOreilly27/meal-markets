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
    defaultValue: new Date()
  },
  image: {
    type: Sequelize.STRING
  }
})

Meal.prototype.setCurrentPrice = () => {
  const rightNow = new Date()
  if ((rightNow - this.pickupDate) <= 0) {
    return this.inStorePrice
  }
  else if (this.pickupDate >= new Date(rightNow.getFullYear(), rightNow.getMonth() + 1, rightNow.getDate())) {
    return this.basePrice
  } else {
    return ((this.inStorePrice - this.basePrice) * (1 - ((this.pickupDate.getDate() - rightNow.getDate()) / 30)))

  }
}

Meal.prototype.setPriceCurve = () => {

}

module.exports = Meal
