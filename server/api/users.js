const router = require('express').Router()
const { User, Order, Meal } = require('../db/models')
const { isSelf } = require('./auth')
const chalk = require('chalk')
module.exports = router

router.use('/owner', require('./restaurantUser'))

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
