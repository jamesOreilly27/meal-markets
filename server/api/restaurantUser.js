const router = require('express').Router()
const { RestaurantUser } = require('../db/models')
const chalk = require('chalk')

router.get('/:id', (req, res, next) => {
  RestaurantUser.scope('restaurant').findById(req.params.id)
  .then(owner => {
    console.log(chalk.bgBlue.white.bold())
    res.json(owner)
  })
  .catch(next)
})

router.get('/:id/orders', (req, res, next) => {
  RestaurantUser.scope('orders').findById(req.params.id)
  .then(user => user.orders.filter(
    order => order.redeemable && !order.fulfilled
  ))
  .then(filteredOrders => res.json(filteredOrders))
  .catch(next)
})

module.exports = router
