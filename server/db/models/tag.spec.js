const { expect } = require('chai')
const db = require('../index')
const Tag = db.model('tag')

describe('Tag model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('associations', () => {

    beforeEach(() => {
      return Tag.create({
        type: 'Japanese',
        tagId: 1
      })
    })
  })
})
