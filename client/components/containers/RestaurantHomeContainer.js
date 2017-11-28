import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderList from '../presenters/OrderList'

const RestaurantHome = () => (
  <div>
    <div style={{ display: 'flex' }}>
      <OrderList filter="open" />
      <OrderList filter="today" />
    </div>
  </div>
)

export default RestaurantHome
