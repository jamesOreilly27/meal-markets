const router = require('express').Router()
const { RestaurantUser } = require('../db/models')
const chalk = require('chalk')

router.get('/:id', (req, res, next) => {
  RestaurantUser.scope('restaurant').findById(req.params.id)
  .then(owner => {
    console.log(chalk.bgBlue.white.bold())
    res.json(owner)
  })
  .catch(next)
})

module.exports = router
