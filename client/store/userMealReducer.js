import axios from 'axios'

export const GET_USER_MEALS = 'GET_USER_MEALS'

export const getUserMeals = userMeals => ({
  type: GET_USER_MEALS,
  userMeals
})

export const fetchUserMeals = (userId) =>
  dispatch =>
    axios.get(`/api/users/${userId}/meals`)
      .then(res =>
        dispatch(getUserMeals(res.data)))
          .catch(err => console.error('Error fetching orders: ', err))

export default (userMeals = [], action) => {
  switch (action.type) {
    case GET_USER_MEALS:
      return action.userMeals
    default:
      return userMeals
  }
}
