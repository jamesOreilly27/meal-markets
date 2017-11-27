const User = require('./user')
const Restaurant = require('./restaurant')
const Meal = require('./meal')
const Order = require('./order')
const Tag = require('./tag')
const RestaurantUser = require('./restaurantUser')

/********** ASSOCIATIONS && SCOPE **********/

RestaurantUser.belongsTo(Restaurant)
RestaurantUser.addScope('restaurant', { include: [{ model: Restaurant }] })

RestaurantUser.hasMany(Order)
Order.belongsTo(RestaurantUser)

RestaurantUser.addScope('orders', { include: [{ model: Order }] })


Restaurant.hasMany(Meal)
Meal.belongsTo(Restaurant)

Meal.addScope('zip', { include: { model: Restaurant, attributes: ['zipCode']}})
Restaurant.addScope('meal', { include: { model: Meal }})

User.belongsToMany(Meal, { through: Order })
Meal.belongsToMany(User, { through: Order })
Tag.belongsToMany(Meal, { through: 'MealTags' })
Meal.belongsToMany(Tag, { through: 'MealTags' })

module.exports = {
  User,
  Restaurant,
  Meal,
  Order,
  Tag,
  RestaurantUser
}
