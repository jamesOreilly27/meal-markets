import axios from 'axios'

export const NEW_ORDER = 'CREATE_ORDER'
export const GET_ORDERS = 'GET_ORDERS'
export const FULFILL_ORDER = 'FULFILL_ORDER'

export const newOrder = order => ({
  type: NEW_ORDER,
  order
})

export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

export const fulfillOrder = order => ({
  type: FULFILL_ORDER,
  order
})

export const fetchOpenOrders = owner =>
  dispatch =>
    axios.get(`/api/users/owner/${owner.id}/open-orders`)
    .then(res => dispatch(getOrders(res.data)))
    .catch(err => dispatch(getOrders(err)))

export const fetchTodaysOrders = owner =>
  dispatch =>
    axios.get(`api/users/owner/${owner.id}/todays-orders`)
    .then(res => dispatch(getOrders(res.data)))
    .catch(err => dispatch(getOrders(err)))

export const createOrder = (userId, quantity, meal, pickupDate, purchasePrice) =>
  dispatch =>
    axios.post('/api/orders', {
      userId,
      mealId: meal.id,
      purchasePrice,
      pickupDate,
      quantity
    })
      .then(res =>
        dispatch(newOrder(res.data)))
      .catch(err => console.error('Error creating order: ', err))

export const fulfillOrderThunk = orderId => dispatch =>
  axios.put(`/api/orders/redeemable/${orderId}`)
    .then(res => res.data)
    .then(order => dispatch(fulfillOrder(order)))
    .catch(err => console.error('Error fulfilling order', err))

export default (orders = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case NEW_ORDER:
      return [...orders, action.order]
    case FULFILL_ORDER:
      return [...orders, action.order]
    default:
      return orders
  }
}
