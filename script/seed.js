const db = require('../server/db')
const { User, Restaurant } = require('../server/db/models')
const chalk = require('chalk')

async function seed () {
  await db.sync({force: true})
  console.log(chalk.bgBlue.white.bold('db synced!'))

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
  ])

  const restaurants = await Promise.all([
    Restaurant.create({ name: 'Pokegreen', address: '3 Hanover Square', zipCode: '10005', phoneNumber: '212-361-0029', email: 'killerPokeBowls@email.com'}),
    Restaurant.create({ name: 'Haru Sushi', address: '1 Wall Street', zipCode: '10005', phoneNumber: '212-785-6850', email: 'Sushi@email.com'}),
    Restaurant.create({ name: 'The Capital Grille', address: '120 Broadway', zipCode: '10271', phoneNumber: '212-374-1811', email: 'capitalgrille@email.com'}),
    Restaurant.create({ name: "Delmonico's", address: '56 Beaver Street', zipCode: '10004', phoneNumber: '212-509-1144', email: 'Delmonicos@email.com'}),
    Restaurant.create({ name: 'Neopolitan Express', address: '40 Wall Street', zipCode: '10005', phoneNumber: '646-918-6169', email: 'NeopolitanExpress@email.com'})
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(chalk.bgRed.white.bold(`seeded ${users.length} users`))
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
