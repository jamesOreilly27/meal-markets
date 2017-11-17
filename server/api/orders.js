const router = require('express').Router()
const { Order } = require('../db/models')

router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then(order => res.json(order))
  .catch(next)
})

module.exports = router
