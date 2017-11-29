import axios from 'axios'

export const GET_MEALS = 'GET_MEALS'

export const getMeals = meals => ({
  type: GET_MEALS,
  meals
})

export const fetchMeals = zip => dispatch => axios
  .get(`/api/meals/${zip}`)
  .then(res => res.data)
  .then(meals => dispatch(getMeals(meals)))
  .catch(err => console.error('Error fetching meals', err))

export const fetchAllMeals = () => dispatch => axios
  .get('/api/meals')
  .then(res => res.data)
  .then(meals => dispatch(getMeals(meals)))
  .catch(err => console.error('Error fetching meals', err))

export const fetchAllMealsAndUsers = () => dispatch =>
  axios.get(`/api/meals/with-users`)
  .then(res => dispatch(getMeals(res.data)))
  .catch(err => console.error('Error Fetching Meals', err))

export default (meals = [], action) => {
  switch (action.type) {
    case GET_MEALS:
      return action.meals
    default:
      return meals
  }
}
