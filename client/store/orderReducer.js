import axios from 'axios'

export const GET_ORDER = 'GET_ORDER'

export const getOrder = order => ({
  type: GET_ORDER,
  order
})

export const fetchOrder = id =>
dispatch => {
  axios.get(`/api/orders/${id}`)
  .then(res => dispatch(getOrder(res.data)))
  .catch(err => console.error(err))
}

export default (order = {}, action) => {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return order
  }
}
