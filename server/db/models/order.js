const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  pickupDate: {
    type: Sequelize.DATE
  },
  fullfilled: {
    type: Sequelize.BOOLEAN
  },
  forSale: {
    type: Sequelize.BOOLEAN
  }
}, {
  getterMethods: {
    redeemable() {
      return (Sequelize.NOW.getDay() === this.pickupDate.getDay())
    }
  }
})

module.exports = Order
