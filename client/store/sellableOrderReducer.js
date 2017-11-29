import axios from 'axios'

export const GET_FORSALE_ORDERS = 'GET_FORSALE_ORDERS'
export const UPDATE_ORDER = 'UPDATE_ORDER'

export const getforSaleOrders = forSaleOrders => ({
  type: GET_FORSALE_ORDERS,
  forSaleOrders
})

export const updateOrder = upOrder => ({
  type: UPDATE_ORDER,
  upOrder
})

export const fetchForSaleOrders = () => dispatch =>
  axios.get('api/orders/sellable')
    .then(res => res.data)
    .then(sellableOrders => dispatch(getforSaleOrders(sellableOrders)))
    .catch(err => dispatch(getforSaleOrders(err)))

export const putOrder = (orderId, userId) => dispatch =>
  axios.put(`api/orders/sellable/${orderId}`, { userId })
    .then(res => res.data)
    .then(order => dispatch(updateOrder(order)))
    .catch(err => dispatch(updateOrder(err)))

export default (sellableOrders = [], action) => {
  switch (action.type) {
    case GET_FORSALE_ORDERS:
      return action.forSaleOrders
    case UPDATE_ORDER: {
      let index = sellableOrders.find(order => order.id === action.upOrder) - 1
      sellableOrders.splice(index, 1)
      console.log(sellableOrders)
      return sellableOrders
    }
    default:
      return sellableOrders
  }
}
