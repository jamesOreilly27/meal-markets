import React from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store'

const BuyNow = ({ user, meal, currentPrice, purchase }) => (
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

const BuyNowContainer = connect(mapState, mapDispatch)(BuyNow)
export default BuyNowContainer
