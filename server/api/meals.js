const router = require('express').Router()
const { Meal } = require('../db/models')

router.get('/', (req, res, next) => {
  Meal.scope('restaurant').findAll()
  .then(meals => res.json(meals))
  .catch(next)
})

module.exports = router
