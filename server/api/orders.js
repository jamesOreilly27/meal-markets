const router = require('express').Router()
const { isSelf, throwError } = require('./auth')
const { Order } = require('../db/models')

const payload = {
  id: 1,
  pickupDate: '2017-11-21 00:00:00-05',
  fulfilled: true,
  userId: 1,
  mealId: 1
}

router.get('/redeemable/:userId', isSelf, (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId } })
  .then(orders => {
    res.json(orders.filter(order => order.redeemable))
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then(order => res.json(order))
  .catch(next)
})

router.put('/redeemable/:orderId', (req, res, next) => Order
  .update(payload, {
    where: { id: req.params.orderId },
    returning: true
  })
  .spread((rows, fulfilledOrder) => res.json(fulfilledOrder))
  .catch(err => console.error('LINE 29 ERROR', err))
)

module.exports = router
