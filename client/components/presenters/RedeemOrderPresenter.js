import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const RedeeemOrderPresenter = ({ redeemableOrders }) => (
  <Col>
    Redeem Me
    {redeemableOrders &&
      redeemableOrders.map(order => (
        <NavLink
          key={order.id}
          to={'/redeem'}
          > Order #{order.id}
        </NavLink>
      ))
    }
  </Col>
)

export default RedeeemOrderPresenter
