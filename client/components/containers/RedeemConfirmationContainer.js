import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fulfillOrderThunk } from '../../store'

class RedeemConfirmationContainerClass extends Component {
  componentDidMount() {
    const { fulfillOrder, match } = this.props
    fulfillOrder(match.params.orderId)
  }
  render() {
    return <h1>ORDER FULFILLED</h1>
  }
}
const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  fulfillOrder(orderId) {
    dispatch(fulfillOrderThunk(orderId))
  }
})

export default withRouter(connect(mapState, mapDispatch)(RedeemConfirmationContainerClass))
