import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderList from '../presenters/TodaysOrdersPresenter'

const RestaurantHome = () => (
  <div>
    <div>
      <OrderList filter="open" />
      <OrderList filter="today" />
    </div>
  </div>
)

export default RestaurantHome
