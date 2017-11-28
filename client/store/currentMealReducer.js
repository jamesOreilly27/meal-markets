export const SET_CURRENT_MEAL = 'SET_CURRENT_MEAL'

export const setCurrentMeal = meal => ({
  type: SET_CURRENT_MEAL,
  meal
})

const defaultMeal = {
  defaultMeal: true,
  basePrice: 800,
  inStorePrice: 1200
}

export default (currentMeal = defaultMeal, action) => {
  switch (action.type) {
    case SET_CURRENT_MEAL:
      return action.meal
    default:
      return currentMeal
  }
}
