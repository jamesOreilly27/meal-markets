import axios from 'axios'
import { fetchForSaleOrders } from './sellableOrderReducer'

export const GET_NOT_FOR_SALE = 'GET_NOT_FOR_SALE'
export const LIST_FOR_SALE = 'LIST_FOR_SALE'

export const getNotForSale = orders => ({
  type: GET_NOT_FOR_SALE,
  orders
})

export const listForSale = orders => ({
  type: LIST_FOR_SALE,
  orders
})

export const fetchNotForSale = user => dispatch => axios
  .get(`/api/users/${user.id}/notForSale`)
  .then(res => res.data)
  .then(orders => dispatch(getNotForSale(orders)))
  .catch(err => console.error('Error fetching orders', err))

export const updateForSale = (orderId, price) => dispatch => axios
    .put(`/api/orders/forSale/${orderId}`, {
      forSale: true,
      listPrice: price
    })
    .then(res => res.data)
    .then(updatedOrders => {
      dispatch(listForSale(updatedOrders))
      dispatch(fetchForSaleOrders())
    })
    .catch(err => console.error('Error updating order', err))

export default (orders = [], action) => {
  switch (action.type) {
    case GET_NOT_FOR_SALE:
      return action.orders
    case LIST_FOR_SALE:
      return action.orders
    default:
      return orders
  }
}
