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
  fulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  forSale: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  purchasePrice: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
}, {
    getterMethods: {
      redeemable() {
        return (new Date().getMonth() === this.pickupDate.getMonth() && new Date().getDate() === this.pickupDate.getDate())
      }
    }
  })

Order.prototype.fulfillOrder = function () {
  this.fulfilled = true
  return this
}

module.exports = Order
