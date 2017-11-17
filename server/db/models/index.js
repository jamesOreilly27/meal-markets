const User = require('./user')
const Restaurant = require('./restaurant')
const Meal = require('./meal')
const Order = require('./order')

/********** ASSOCIATIONS **********/

Restaurant.hasMany(Meal)
Meal.belongsTo(Restaurant)

User.belongsToMany(Meal, { through: Order })
Meal.belongsToMany(User, { through: Order })

module.exports = {
  User,
  Restaurant,
  Meal,
  Order
}
