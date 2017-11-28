const router = require('express').Router()
const { RestaurantUser } = require('../db/models')

router.get('/:id', (req, res, next) => {
  RestaurantUser.scope('restaurant').findById(req.params.id)
  .then(owner => res.json(owner))
  .catch(next)
})

router.get('/:id/open-orders', (req, res, next) => {
  RestaurantUser.scope('orders').findById(req.params.id)
  .then(user => user.orders.filter(
    order => !order.fulfilled
  ))
  .then(openOrders => res.json(openOrders))
  .catch(next)
})

router.get('/:id/todays-orders', (req, res, next) => {
  RestaurantUser.scope('orders').findById(req.params.id)
  .then(user => user.orders.filter(
    order => order.redeemable && !order.fulfilled
  ))
  .then(todaysOrders => res.json(todaysOrders))
  .catch(next)
})

module.exports = router
