const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pickupDate: {
    type: Sequelize.DATE
  },
  fullfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  forSale: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  purchasePrice: {
    type: Sequelize.INTEGER
  }
}, {
  getterMethods: {
    redeemable() {
      return (new Date().getMonth() === this.pickupDate.getMonth() && new Date().getDate() === this.pickupDate.getDate())
    }
  }
})

module.exports = Order
