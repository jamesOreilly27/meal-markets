const router = require('express').Router()
const { Order } = require('../db/models')
const { isSelf } = require('./auth')

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(order => res.json(order))
    .catch(next)
})

router.get('/:userId/', isSelf, (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId } })
    .then(userOrders => res.json(userOrders))
    .catch(next)
})

module.exports = router
