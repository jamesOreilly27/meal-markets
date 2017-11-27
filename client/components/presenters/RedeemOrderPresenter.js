import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const RedeeemOrderPresenter = ({ redeemableOrders }) => (
  <Col>
    Redeemable Meals
    {redeemableOrders &&
      redeemableOrders.map(order => (
        <NavLink
          key={order.id}
          to={`/users/${order.id}/redeem`}
          > Redeem Order #{order.id}
        </NavLink>
      ))
    }
  </Col>
)

export default RedeeemOrderPresenter
