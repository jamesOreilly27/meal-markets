import React from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store'

const BuyNow = ({ meal, purchase }) => (
  <div>
    <button onClick={() => purchase(meal)}>Buy Now</button>
  </div>
)

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  purchase(meal) {
    dispatch(createOrder(meal))
  }
})

const BuyNowContainer = connect(mapState, mapDispatch)(BuyNow)
export default BuyNowContainer
