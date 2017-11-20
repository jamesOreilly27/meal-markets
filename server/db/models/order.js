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
      return (new Date().getMonth() === this.pickupDate.getMonth() && new Date().getDate() === this.pickupDate.getDate())
    }
  }
})

module.exports = Order
