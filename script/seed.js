const db = require('../server/db')
const { User, Restaurant, Meal, Order, Tag, RestaurantUser } = require('../server/db/models')
const MealTags = db.model('MealTags')
const chalk = require('chalk')

const Chance = require('chance')
const chance = new Chance()

const ONE_WEEK = new Date('Dec 8 2017')
const TWO_WEEKS = new Date('Dec 13 2017')
const THREE_WEEKS = new Date('Dec 20 2017')

async function seed() {
  await db.sync({ force: true })
  console.log(chalk.bgBlue.white.bold('db synced!'))

  const users = await Promise.all([
    User.create({ name: 'cody', zipcode: '10005', email: 'cody@email.com', password: '123' }),
    User.create({ name: 'murphy', zipcode: '10005', email: 'murphy@email.com', password: '123' }),
  ])

  const restaurants = await Promise.all([
    Restaurant.create({ name: 'Pokegreen', address: '3 Hanover Square', zipCode: '10005', phoneNumber: '212-361-0029' }),
    Restaurant.create({ name: 'Haru Sushi', address: '1 Wall Street', zipCode: '10005', phoneNumber: '212-785-6850' }),
    Restaurant.create({ name: 'Chipotle', address: '100 Maiden Lane', zipCode: '10038', phoneNumber: '212-742-2690' }),
    Restaurant.create({ name: "Delmonico's", address: '56 Beaver Street', zipCode: '10004', phoneNumber: '212-509-1144' }),
    Restaurant.create({ name: 'Neopolitan Express', address: '40 Wall Street', zipCode: '10005', phoneNumber: '646-918-6169' })
  ])

  const owners = await Promise.all([
    RestaurantUser.create({ restaurantId: restaurants[0].id, password: '456', email: 'poke_bowl123@email.com' })
  ])

  const meals = await Promise.all([
    Meal.create({ name: 'PokeSpecial', inStorePrice: 1395, basePrice: 950, image: 'https://s3-media2.fl.yelpcdn.com/bphoto/vKWH-YxbXB3-EqECM9-jkg/348s.jpg', restaurantId: restaurants[0].id }),
    Meal.create({ name: 'Mixed Tempura', inStorePrice: 1295, basePrice: 900, image: 'https://vinesmag.files.wordpress.com/2012/08/e5a4a9e381b7e38289-recipe2.jpg', restaurantId: restaurants[1].id }),
    Meal.create({ name: 'Steak Burrito', inStorePrice: 1000, basePrice: 650, image: 'http://img.thedailybeast.com/image/upload/v1492725220/articles/2013/07/31/chipotle-and-the-terrible-horrible-no-good-very-bad-vegan-burrito/130730-Ross-Chipotle-tease_qe5dgb.jpg', restaurantUserId: restaurants[2].id }),
    Meal.create({ name: 'Classic Burger', inStorePrice: 1500, basePrice: 1300, image: 'https://s3-media2.fl.yelpcdn.com/bphoto/As-H9l-8oVuHxKSYzNAnzQ/ls.jpg', restaurantId: restaurants[3].id }),
    Meal.create({ name: 'Americano', inStorePrice: 1000, basePrice: 850, image: 'https://s3-media4.fl.yelpcdn.com/bphoto/Iev-jKlHcfuSUcJINxTKFg/ls.jpg', restaurantId: restaurants[4].id })
  ])

  const tags = await Promise.all([
    Tag.create({ type: 'Japanese' }),
    Tag.create({ type: 'Mexican' }),
    Tag.create({ type: 'American' }),
    Tag.create({ type: 'Meat-Lover' }),
    Tag.create({ type: 'Vegetarian' }),
  ])

  const mealTags = await Promise.all([
    MealTags.create({ mealId: 1, tagId: 1 }),
    MealTags.create({ mealId: 3, tagId: 2 }),
  ])

  const orders = await Promise.all([
    Order.create({ pickupDate: ONE_WEEK, fullfilled: false, forSale: false, purchasePrice: 1000, quantity: 20, mealId: meals[0].id, userId: users[0].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: TWO_WEEKS, fullfilled: false, forSale: true, listPrice: 940, purchasePrice: 1500, quantity: 30, mealId: meals[1].id, userId: users[0].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: THREE_WEEKS, fullfilled: false, forSale: true, listPrice: 900, purchasePrice: 2000, quantity: 40, mealId: meals[2].id, userId: users[0].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: ONE_WEEK, fullfilled: false, forSale: false, purchasePrice: 2500, quantity: 50, mealId: meals[3].id, userId: users[0].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: ONE_WEEK, fullfilled: false, forSale: false, purchasePrice: 1100, quantity: 25, mealId: meals[0].id, userId: users[1].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: ONE_WEEK, fullfilled: false, forSale: true, listPrice: 1070, purchasePrice: 1300, quantity: 50, mealId: meals[1].id, userId: users[1].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: TWO_WEEKS, fullfilled: false, forSale: true, listPrice: 1400, purchasePrice: 1700, quantity: 75, mealId: meals[2].id, userId: users[1].id, restaurantUserId: owners[0].id }),
    Order.create({ pickupDate: THREE_WEEKS, fullfilled: false, forSale: false, purchasePrice: 1900, quantity: 100, mealId: meals[3].id, userId: users[1].id, restaurantUserId: owners[0].id })
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(chalk.bgRed.white.bold(`seeded ${users.length} users, ${restaurants.length} restaurants, ${meals.length} meals, ${orders.length} orders, ${tags.length} tags, ${mealTags.length} mealTags, ${owners.length} RestaurantUsers`))
  console.log(chalk.bgGreen.white.bold(`seeded successfully`))
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
