const router = require('express').Router()
const { isSelf, throwError } = require('./auth')
const { Order } = require('../db/models')

// TODO - CLEAN UP HARDCODED DATA
const payload = {
  id: 2,
  pickupDate: '2017-11-28 00:00:00-05',
  fulfilled: true,
  userId: 1,
  mealId: 3
}

router.get('/redeemable/user-orders/:userId', isSelf, (req, res, next) => Order
  .findAll({ where: { userId: req.params.userId } })
  .then(orders => res.json(orders.filter(order => order.redeemable)))
  .catch(next)
)

router.get('/redeemable/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
  .then(order => res.json(order))
  .catch(next)
})

router.post('/', (req, res, next) => Order
  .create(req.body)
  .then(order => res.json(order))
  .catch(next)
)

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
  .then(order => res.json(order))
  .catch(next)
})

router.put('/redeemable/:orderId', (req, res, next) => Order
  .update(payload, {
    where: { id: req.params.orderId },
    returning: true
  })
  .spread((rows, fulfilledOrder) => res.json(fulfilledOrder))
  .catch(next)
)

module.exports = router
