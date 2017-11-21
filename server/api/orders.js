const router = require('express').Router()
const { isSelf } = require('./auth')
const { Order } = require('../db/models')


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

module.exports = router
