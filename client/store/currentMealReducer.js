export const GET_CURRENT_MEAL = 'GET_CURRENT_MEAL'

export const getCurrentMeal = meal => ({
  type: GET_CURRENT_MEAL,
  meal
})

export default (currentMeal = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_MEAL:
      return action.meal
    default:
      return currentMeal
  }
}
