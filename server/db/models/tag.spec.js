const { expect } = require('chai')
const db = require('../index')
const Tag = db.model('tag')
const Meal = db.model('meal')
const MealTags = db.model('MealTags')

describe('Tag model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('associations', () => {
    let testMeal

    beforeEach(() => {
      console.log('RUNNING!')
      return Meal.create({
        name: 'Pokebowl',
        inStorePrice: 1000,
        basePrice: 900,
      })
      .then(meal => {
        testMeal = meal
        return Tag.create({
          type: 'Hawaiian',
        })
        .then(tag => {
          testMeal.addTag(tag)
        })
      })
    })

    it('testMeal has one tag association in the join table', () => {
      MealTags.findAll()
      .then(found => console.log('All', found))
      MealTags.findAll({where: {
        mealId: testMeal.id
      }})
      .then(foundMealTags => {
        expect(foundMealTags.length).to.be.equal(1)
      })
    })

  })
})
