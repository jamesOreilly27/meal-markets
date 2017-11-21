import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RedeemOrderPresenter from '../presenters/RedeemOrderPresenter'
import { getRedeemableOrders } from '../../store'

class RedeemOrderContainer extends Component {
  componentDidMount() {
    this.props.findAllRedeemable(this.props.userId)
  }
  render() {
    const { redeemableOrders } = this.props
    return (
      <div>
        <RedeemOrderPresenter redeemableOrders={redeemableOrders} />
      </div>
    )
  }
}
const mapState = state => ({
  userId: state.user.id,
  redeemableOrders: state.redeemableOrders
})

const mapDispatch = dispatch => ({
  findAllRedeemable(userId) {
    dispatch(getRedeemableOrders(userId))
  }
})

export default withRouter(connect(
  mapState, mapDispatch
)(RedeemOrderContainer))
