/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Meal = db.model('meal')
const Restaurant = db.model('restaurant')
const Tag = db.model('tag')

  describe('Meal Model', () => {
    describe('associations', () => {
      let testRest
      let poke
      let testTag
      beforeEach(() => Restaurant.create({
          name: 'PokeGreen',
          address: '3 Hanover Square',
          zipCode: '10005',
          phoneNumber: '555-555-5555',
          email: 'PokeBowl@email.com'
        })
        .then(restaurant => {
          testRest = restaurant
        })
        .then(() => Meal.create({
            name: 'Chicken Parm',
            inStorePrice: 10,
            basePrice: 5,
            restaurantId: testRest.id
          }))
        .then(meal => {
          poke = meal
        })
        .then(() => Tag.create({
          type: 'Hawaiian'
        }))
        .then(tag => {
          testTag = tag
        }))
      it('Meal Model is associated to restaurants', () => {
        console.log('poke.dataValues.restaurantId: ', poke.dataValues.restaurantId)
        expect(poke.dataValues.restaurantId).to.be.equal(testRest.id)
      })
    })
  })
