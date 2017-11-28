import axios from 'axios'

export const GET_NOT_FOR_SALE = 'GET_NOT_FOR_SALE'

export const getNotForSale = orders => ({
  type: GET_NOT_FOR_SALE,
  orders
})

export const fetchNotForSale = user => dispatch => axios
  .get(`/api/users/${user.id}/notForSale`)
  .then(res => res.data)
  .then(orders => {
    console.log('notForSale: ', orders)
    dispatch(getNotForSale(orders))})
  .catch(err => console.error('Error fetching orders', err))

export default (orders = [], action) => {
  switch (action.type) {
    case GET_NOT_FOR_SALE:
      return action.orders
    default:
      return orders
  }
}
