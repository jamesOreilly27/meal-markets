import axios from 'axios'

export const GET_SELLABLE_ORDERS = 'GOT_SELLABLE_ORDERS'

export const getSellableOrders = sellableOrders => ({
  type: GET_SELLABLE_ORDERS,
  sellableOrders
})

export const fetchSellableOrders = () => dispatch =>
  axios.get('api/orders/sellable')
    .then(res => res.data)
    .then(sellableOrders => dispatch(getSellableOrders(sellableOrders)))
    .catch(err => dispatch(getSellableOrders(err)))

export default (sellableOrders = [], action) => {
  switch (action.type) {
    case GET_SELLABLE_ORDERS:
      return action.sellableOrders
    default:
      return sellableOrders
  }
}
