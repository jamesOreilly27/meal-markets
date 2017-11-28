import axios from 'axios'

export const GET_FOR_SALE = 'GET_FOR_SALE'

export const getForSale = orders => ({
  type: GET_FOR_SALE,
  orders
})

export const fetchForSale = user => dispatch => axios
  .get(`/api/users/${user.id}/forSale`)
  .then(res => res.data)
  .then(orders => {
    console.log('notForSale: ', orders)
    dispatch(getForSale(orders))})
  .catch(err => console.error('Error fetching orders', err))

export default (orders = [], action) => {
  switch (action.type) {
    case GET_FOR_SALE:
      return action.orders
    default:
      return orders
  }
}
