const User = require('./user')
const Restaurant = require('./restaurant')
const Meal = require('./meal')
const Order = require('./order')

/********** ASSOCIATIONS && SCOPE **********/

Restaurant.hasMany(Meal)
Meal.belongsTo(Restaurant)

Meal.addScope('zip', { include: { model: Restaurant, attributes: ['zipCode']}})
Restaurant.addScope('meal', { include: { model: Meal }})

User.belongsToMany(Meal, { through: Order })
Meal.belongsToMany(User, { through: Order })

module.exports = {
  User,
  Restaurant,
  Meal,
  Order
}
