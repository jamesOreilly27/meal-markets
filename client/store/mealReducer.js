import axios from 'axios'
import { getCurrentPrice } from '../utils'

export const GET_MEALS = 'GET_MEALS'

export const getMeals = meals => ({
  type: GET_MEALS,
  meals
})

export const fetchMeals = zip => dispatch => axios
  .get(`/api/meals/${zip}`)
  .then(res => res.data)
  .then(meals => dispatch(meals))
  .catch(err => console.error('Error fetching meals', err))

export const fetchAllMeals = () => dispatch => axios
  .get('/api/meals')
  .then(res => res.data)
  .then(meals => dispatch(meals))
  .catch(err => console.error('Error fetching meals', err))

export default (meals = [], action) => {
  switch (action.type) {
    case GET_MEALS:
      return action.meals
    default:
      return meals
  }
}
