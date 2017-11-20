const db = require('../server/db')
const { User, Restaurant, Meal, Order, Tag } = require('../server/db/models')
const MealTags = db.model('MealTags')
const chalk = require('chalk')

async function seed () {
  await db.sync({force: true})
  console.log(chalk.bgBlue.white.bold('db synced!'))

  const users = await Promise.all([
    User.create({ name: 'cody', zipcode: '10005', email: 'cody@email.com', password: '123' }),
    User.create({ name: 'murphy', zipcode: '10005', email: 'murphy@email.com', password: '123' }),
  ])

  const restaurants = await Promise.all([
    Restaurant.create({ name: 'Pokegreen', address: '3 Hanover Square', zipCode: '10005', phoneNumber: '212-361-0029', email: 'killerPokeBowls@email.com' }),
    Restaurant.create({ name: 'Haru Sushi', address: '1 Wall Street', zipCode: '10005', phoneNumber: '212-785-6850', email: 'Sushi@email.com' }),
    Restaurant.create({ name: 'Chipotle', address: '100 Maiden Lane', zipCode: '10038', phoneNumber: '212-742-2690', email: 'capitalgrille@email.com' }),
    Restaurant.create({ name: "Delmonico's", address: '56 Beaver Street', zipCode: '10004', phoneNumber: '212-509-1144', email: 'Delmonicos@email.com' }),
    Restaurant.create({ name: 'Neopolitan Express', address: '40 Wall Street', zipCode: '10005', phoneNumber: '646-918-6169', email: 'NeopolitanExpress@email.com' }),
  ])

  const meals = await Promise.all([
    Meal.create({ name: 'PokeSpecial', inStorePrice: 1395, basePrice: 950, image: 'https://s3-media2.fl.yelpcdn.com/bphoto/vKWH-YxbXB3-EqECM9-jkg/348s.jpg', pickupDate: '11/25/2017', restaurantId: restaurants[0].id }),
    Meal.create({ name: 'Mixed Tempura', inStorePrice: 1295, basePrice: 900, image: 'https://vinesmag.files.wordpress.com/2012/08/e5a4a9e381b7e38289-recipe2.jpg', pickupDate: '11/30/2017', restaurantId: restaurants[1].id }),
    Meal.create({ name: 'Steak Burrito', inStorePrice: 1000, basePrice: 650, image: 'http://img.thedailybeast.com/image/upload/v1492725220/articles/2013/07/31/chipotle-and-the-terrible-horrible-no-good-very-bad-vegan-burrito/130730-Ross-Chipotle-tease_qe5dgb.jpg', pickupDate: '11/25/2017', restaurantId: restaurants[2].id }),
    Meal.create({ name: 'Classic Burger', inStorePrice: 1500, basePrice: 1300, image: 'https://s3-media2.fl.yelpcdn.com/bphoto/As-H9l-8oVuHxKSYzNAnzQ/ls.jpg', pickupDate: '11/28/2017', restaurantId: restaurants[3].id }),
    Meal.create({ name: 'Americano', inStorePrice: 1000, basePrice: 850, image: 'https://s3-media4.fl.yelpcdn.com/bphoto/Iev-jKlHcfuSUcJINxTKFg/ls.jpg', pickupDate: '01/30/2018', restaurantId: restaurants[4].id })
  ])

  const tags = await Promise.all([
    Tag.create({ type: 'Japanese' }),
    Tag.create({ type: 'Mexican' }),
    Tag.create({ type: 'American' }),
    Tag.create({ type: 'Meat-Lover' }),
    Tag.create({ type: 'Vegetarian' }),
  ])

  const mealTags = await Promise.all([
    MealTags.create({ mealId: 1, tagId: 1}),
    MealTags.create({ mealId: 3, tagId: 2 }),
  ])

  const orders = await Promise.all([
    Order.create({ pickupDate: new Date('Nov 20 2017'), fullfilled: false, forSale: false, mealId: meals[0].id, userId: users[0].id }),
    Order.create({ pickupDate: new Date('Nov 22 2017'), fullfilled: false, forSale: false, mealId: meals[1].id, userId: users[0].id }),
    Order.create({ pickupDate: new Date('Nov 24 2017'), fullfilled: false, forSale: false, mealId: meals[2].id, userId: users[1].id }),
    Order.create({ pickupDate: new Date('Nov 23 2017'), fullfilled: false, forSale: false, mealId: meals[3].id, userId: users[1].id })
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(chalk.bgRed.white.bold(`seeded ${users.length} users, ${restaurants.length} restaurants, ${meals.length} meals, ${orders.length} orders, ${tags.length} tags, ${mealTags.length} mealTags`))
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
