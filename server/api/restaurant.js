const router = require('express').Router()
const { Restaurant } = require('../db/models')

router.get('/', (req, res, next) => {
  Restaurant.findAll()
  .then(restaurants => res.json(restaurants))
  .catch(next)
})

module.exports = router
