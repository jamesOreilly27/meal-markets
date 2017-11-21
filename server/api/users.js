const router = require('express').Router()
const { User, Order, Meal } = require('../db/models')
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

router.get('/:userId/meals', isSelf, (req, res, next) => {
  User.findById(req.params.userId, {
    include: [{model: Meal}]
  })
    .then(user => res.json(user.meals))
    .catch(next)
})

router.get('/:userId/redeemable', isSelf, (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId } })
  .then(orders => {
    res.json(orders.filter(order => order.redeemable))
  })
  .catch(next)
})
