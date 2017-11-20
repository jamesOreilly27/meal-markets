import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RedeemMealPresenter from '../presenters/RedeemMealPresenter'

const RedeemMealContainer = ({ redeemableMeals }) => (
  <div>
    <RedeemMealPresenter redeemableMeals={redeemableMeals} />
  </div>
)

const mapState = state => ({
  redeemableMeals: state.redeemableMeals
})

const mapDispatch = dispatch => ({
  findAllRedeemable () {
    dispatch()
  }
})

export default withRouter(connect(
  mapState, mapDispatch
)(RedeemMealContainer))
