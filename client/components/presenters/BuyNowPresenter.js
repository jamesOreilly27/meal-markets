import React from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store'
import { withRouter } from 'react-router-dom'

const BuyNow = ({ user, meal, currentPrice, purchase }) => (
  meal &&
  <div>
    <button onClick={() => purchase(user, meal, currentPrice)}>Buy Now</button>
  </div>
)

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  purchase(user, meal, currentPrice) {
    dispatch(createOrder(user, meal, currentPrice))
  }
})

const BuyNowContainer = withRouter(connect(mapState, mapDispatch)(BuyNow))
export default BuyNowContainer
