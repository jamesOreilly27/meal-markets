const router = require('express').Router()
const { Meal, Restaurant } = require('../db/models')
const chalk = require('chalk')

router.get('/', (req, res, next) => {
  Meal.scope('zip').findAll()
  .then(meals => res.json(meals))
  .catch(next)
})

router.get('/:zip', (req, res, next) => {
  Restaurant.scope('meal').findAll({
    where: { zipCode: req.params.zip }
  })
  .then(restaurants => res.json(restaurants.map(
    restaurant => restaurant.dataValues.meals[0]
  )))
  .catch(next)
})

router.get('/redeemable/:user', (req, res, next) => {
  Restaurant.scope('meal').findAll({
    where: { zipCode: req.params.zip }
  })
  .then(restaurants => res.json(restaurants.map(
    restaurant => restaurant.dataValues.meals[0]
  )))
  .catch(next)
})

module.exports = router
