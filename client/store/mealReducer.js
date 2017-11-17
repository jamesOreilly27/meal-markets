import axios from 'axios'

export const GET_MEALS = 'GET_MEALS'

export const getMeals = meals => ({
  type: GET_MEALS,
  meals
})

export const fetchMeals = zip => dispatch => axios
  .get(`/api/meals/${zip}`)
  .then(res => {
    console.log('====================================')
    console.log('res: ', res)
    console.log('====================================')
    return res.data
  })
  .then(meals => {
    console.log('====================================')
    console.log('meals: ', meals)
    console.log('====================================')
    dispatch(getMeals(meals))
  })
  .catch(err => console.error('Error fetching meals', err))

export default (meals = [], action) => {
  switch (action.type) {
    case GET_MEALS:
      return action.meals
    default:
      return meals
  }
}
