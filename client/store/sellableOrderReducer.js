import axios from 'axios'

export const GET_FORSALE_ORDERS = 'GOT_FORSALE_ORDERS'
export const TRANSFER_ORDER = 'TRANSFER_ORDER'

export const getforSaleOrders = forSaleOrders => ({
  type: GET_FORSALE_ORDERS,
  forSaleOrders
})

export const transferOrder = transOrder => ({
  type: TRANSFER_ORDER,
  transOrder
})

export const fetchSellOrders = () => dispatch =>
  axios.get('api/orders/sellable')
    .then(res => res.data)
    .then(sellableOrders => dispatch(getforSaleOrders(sellableOrders)))
    .catch(err => dispatch(getforSaleOrders(err)))

export const putOrder = (order, userId) => dispatch =>
  axios.put(`api/orders/sellable/${order.id}`, { userId })
    .then(res => res.data)
    .then(updatedOrder => dispatch(transferOrder(updatedOrder)))
    .catch(err => dispatch(transferOrder(err)))

export default (sellableOrders = [], action) => {
  switch (action.type) {
    case GET_FORSALE_ORDERS:
      return action.sellableOrders
    case TRANSFER_ORDER:
      sellableOrders.find(order => order.id === action.transOrder.id).userId = action.transOrder.userId
      return sellableOrders
    default:
      return sellableOrders
  }
}
