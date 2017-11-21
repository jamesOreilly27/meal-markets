import axios from 'axios'

export const GOT_REDEEMABLE_ORDERS = 'GOT_REDEEMABLE_ORDERS'

export const gotRedeemableOrders = orders => ({
  type: GOT_REDEEMABLE_ORDERS,
  orders
})

export const getRedeemableOrders = userId => dispatch => axios
  .get(`api/orders/redeemable/${userId}`)
  .then(res => res.data)
  .then(orders => dispatch(gotRedeemableOrders(orders)))
  .catch(err => dispatch(gotRedeemableOrders(err)))

export default (orders = [], action) => {
  switch (action.type) {
    case GOT_REDEEMABLE_ORDERS:
      return action.orders
    default:
      return orders
  }
}
