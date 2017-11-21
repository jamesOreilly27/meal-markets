import axios from 'axios'
import { disconnect } from 'cluster';

export const GET_USER_ORDERS = 'GET_USER_ORDERS'
export const NEW_ORDER = 'CREATE_ORDER'

export const getUserOrders = userOrders => ({
  type: GET_USER_ORDERS,
  userOrders
})

export const newOrder = order => ({
  type: NEW_ORDER,
  order
})

export const fetchUserOrder = (userId) =>
  dispatch =>
    axios.get(`/api/order/${userId}`)
      .then(res =>
        dispatch(getUserOrders(res.data)))
      .catch(err => console.error('Error fetching orders: ', err))

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
    case GET_USER_ORDERS:
      return [...orders, ...action.userOrders]
    case NEW_ORDER:
      return [...orders, action.order]
    default:
      return orders
  }
}
