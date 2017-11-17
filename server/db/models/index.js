const User = require('./user')
const Restaurant = require('./restaurant')
const Meal = require('./meal')
const Order = require('./order')
const Tag = require('./tag')

/********** ASSOCIATIONS **********/

Restaurant.hasMany(Meal)
Meal.belongsTo(Restaurant)

User.belongsToMany(Meal, { through: Order })
Meal.belongsToMany(User, { through: Order })
Tag.belongsToMany(Meal, { through: 'MealTags' })
Meal.belongsToMany(Meal, { through: 'MealTags' })

module.exports = {
  User,
  Restaurant,
  Meal,
  Order,
  Tag
}
