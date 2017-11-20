const router = require('express').Router()
const { User, Order } = require('../db/models')
const { isSelf, throwError } = require('./auth')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId/redeemable', isSelf, (req, res, next) => {
  console.log('REQ PARAMS', req.params.userId)
  console.log('REQ USER', req.user.id)
  Order.findAll({ where: { userId: req.params.userId } })
  .then(orders => {
    res.json(orders.filter(order => order.redeemable))
  })
  .catch(next)
})
