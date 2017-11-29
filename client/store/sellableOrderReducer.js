import axios from 'axios'

export const GET_FORSALE_ORDERS = 'GET_FORSALE_ORDERS'
export const TRANSFER_ORDER = 'TRANSFER_ORDER'

export const getforSaleOrders = forSaleOrders => ({
  type: GET_FORSALE_ORDERS,
  forSaleOrders
})

export const transferOrder = transOrder => ({
  type: TRANSFER_ORDER,
  transOrder
})

export const fetchForSaleOrders = () => dispatch =>
  axios.get('api/orders/sellable')
    .then(res => res.data)
    .then(sellableOrders => dispatch(getforSaleOrders(sellableOrders)))
    .catch(err => dispatch(getforSaleOrders(err)))

export const putOrder = (orderId, userId) => dispatch =>
  axios.put(`api/orders/sellable/${orderId}`, { userId })
    .then(res => res.data)
    .then(() => fetchForSaleOrders)
    .catch(err => dispatch(transferOrder(err)))

export default (sellableOrders = [], action) => {
  switch (action.type) {
    case GET_FORSALE_ORDERS:
      return action.forSaleOrders
    case TRANSFER_ORDER:
      // newOrder = sellableOrders.find(order => order.id === action.transOrder.id)
      // newOrder.userId = action.transOrder.userId
      return sellableOrders
    default:
      return sellableOrders
  }
}
