import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fulfillOrderThunk } from '../../store'

class RedeemConfirmationContainerClass extends Component {

  componentDidMount() {
    const { fulfillOrder } = this.props
    fulfillOrder(this.props.orderId)
  }
  render() {
    return <h1>ORDER # {this.props.orderId} Fulfilled</h1>
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
