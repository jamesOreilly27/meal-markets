/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { fetchMeals } from './mealReducer'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { meals: [] }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchMeals', () => {
    it('eventually dispatches the GET MEALS action', () => {
      const fakeMeals = [{
        name: 'Chicken Parm',
        inStorePrice: 10,
        basePrice: 5
      }]
      const fakeZip = '11010'
      mockAxios.onGet(`/meals/${fakeZip}`).replyOnce(200, fakeMeals)
      return store.dispatch(fetchMeals(fakeZip))
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_MEALS')
          expect(actions[0].meals).to.be.deep.equal(fakeMeals)
        })
    })
  })
})
