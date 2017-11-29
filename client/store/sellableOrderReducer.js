import axios from 'axios'
import { fetchNotForSale } from './notForSaleReducer'

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
    .then(order => {
      dispatch(updateOrder(order))
      dispatch(fetchNotForSale(userId))
    })
    .catch(err => dispatch(updateOrder(err)))

export default (sellableOrders = [], action) => {
  switch (action.type) {
    case GET_FORSALE_ORDERS:
      return action.forSaleOrders
    case UPDATE_ORDER: {
      const index = sellableOrders.indexOf(sellableOrders.find(order => order.id === action.upOrder.id))
      const updatedOrders = sellableOrders.slice()
      updatedOrders.splice(index, 1)
      return updatedOrders
    }
    default:
      return sellableOrders
  }
}
