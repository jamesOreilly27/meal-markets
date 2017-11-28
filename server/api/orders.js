const router = require('express').Router()
const { isSelf, throwError } = require('./auth')
const { Order } = require('../db/models')

// TODO - CLEAN UP HARDCODED DATA
const payload = {
  id: 1,
  pickupDate: '2017-11-21 00:00:00-05',
  fulfilled: true,
  userId: 1,
  mealId: 1
}

router.get('/redeemable/:userId', isSelf, (req, res, next) => Order
  .findAll({ where: { userId: req.params.userId } })
  .then(orders => res.json(orders.filter(order => order.redeemable)))
  .catch(next)
)

router.post('/', (req, res, next) => Order
  .findOrCreate({
    where: {
      userId: req.body.userId,
      mealId: req.body.mealId,
    },
    defaults: {
      pickupDate: req.body.pickupDate,
      purchasePrice: req.body.purchasePrice,
    }
  })
  .spread(order => order.increment('quantity', { by: req.body.quantity}))
  .then(updatedOrder => res.json(updatedOrder))
  .catch(next)
)

router.put('/redeemable/:orderId', (req, res, next) => Order
  .update(payload, {
    where: { id: req.params.orderId },
    returning: true
  })
  .spread((rows, fulfilledOrder) => res.json(fulfilledOrder))
  .catch(next)
)

module.exports = router
