import React from 'react'
import { Button } from 'react-bootstrap'

const BuyPanel = ({ sellableOrders }) => (
  <div>
    <h2>Buy Panel</h2>
    <p>Use this panel to make bulk purchases of the currently selected meal</p>

    <select className="form-control">
      {
        sellableOrders.map(order =>
          (<option
            key={order.id}
            value={order.id}>
            {`${require('moment')(order.pickupDate).format('MM/DD/YYYY')} 
            - Qty: ${order.quantity} 
            | Price: $${(order.purchasePrice / 100).toFixed(2)}`}
          </option>)
        )
      }
    </select>

    <Button onClick={() => console.log('Hello!')}>Buy</Button>
  </div>
)

export default BuyPanel
