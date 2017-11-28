import axios from 'axios'

export const GET_ORDER = 'GET_ORDER'

export const getOrder = order => ({
  type: GET_ORDER,
  order
})

<<<<<<< HEAD
export const fetchOrder = id =>
dispatch => {
  axios.get(`/api/orders/${id}`)
  .then(res => dispatch(getOrder(res.data)))
  .catch(err => console.error(err))
}
=======
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
>>>>>>> master

export default (order = {}, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return order
  }
}
