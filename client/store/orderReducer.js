import axios from 'axios'

export const NEW_ORDER = 'CREATE_ORDER'

export const newOrder = order => ({
  type: NEW_ORDER,
  order
})

export const createOrder = () =>
  dispatch =>
    axios.post('/api/order')
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
