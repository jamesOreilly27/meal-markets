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
  .then(meals => {
    console.log(meals)
    dispatch(getMeals(meals.map(
      meal => Object.assign({}, meal, {
        currentPrice: getCurrentPrice(+meal.basePrice, +meal.inStorePrice, meal.pickupDate)
      })))
    )})
  .catch(err => console.error('Error fetching meals', err))

export default (meals = [], action) => {
  switch (action.type) {
    case GET_MEALS:
      return action.meals
    default:
      return meals
  }
}
