import axios from 'axios'

export const NEW_ORDER = 'CREATE_ORDER'

export const newOrder = order => ({
  type: NEW_ORDER,
  order
})

export const createOrder = (user, meal, currentPrice) =>
  dispatch =>
    axios.post('/api/order', {
      userId: user.id,
      mealId: meal.id,
      purchasePrice: currentPrice,
      pickupDate: meal.pickupDate
    })
    .then(res =>
      dispatch(newOrder(res.data)))
    .catch(err => console.error('Error creating order: ', err))

export default (orders = [], action) => {
  switch (action.type) {
    case NEW_ORDER:
      return [...orders, action.order]
    default:
      return orders
  }
}
