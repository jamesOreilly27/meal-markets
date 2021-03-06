import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { putOrder } from '../../store'

const BuyPanel = ({ putOrderDisp, sellableOrders, userId }) => (
  <div className="buy-panel">
    <h2 className="panel-heading">Buy Panel</h2>
    <form onSubmit={(evt) => {
      evt.preventDefault()
      if (evt.target.selectedOrder.value) putOrderDisp(evt.target.selectedOrder.value, userId)
    }}>
      <select
        className="form-control"
        name="selectedOrder"
        type="selectedOrder"
      >
        {
          sellableOrders.map(order =>
            (<option key={order.id} value={order.id}>
              {`${require('moment')(order.pickupDate).format('MM/DD/YYYY')} 
            - Qty: ${order.quantity} 
            | Price: $${(order.listPrice / 100).toFixed(2)}`}
            </option>)
          )
        }
      </select>
      <Button type="submit">Buy Listing</Button>
    </form>

  </div>
)

const mapDispatch = dispatch => ({
  putOrderDisp(orderId, userId) {
    dispatch(putOrder(orderId, userId))
  }
})

export default withRouter(connect(null, mapDispatch)(BuyPanel))
