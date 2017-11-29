import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VictoryTraderPresenter from '../presenters/VictoryTraderPresenter'
import { setCurrentMeal, fetchNotForSale } from '../../store'

class VictoryContainerClass extends Component {
  componentDidMount() {
    const { setMeal, propMeal, loadNotForSale, user } = this.props
    propMeal && setMeal(propMeal)
    loadNotForSale(user)
  }
  render() {
    const { propMeal, stateMeal } = this.props
    const meal = propMeal || stateMeal
    const arrSize = 30
    const data = new Array(arrSize).fill(0).map((el, index) => ({
      basePrice: meal.basePrice,
      inStorePrice: meal.inStorePrice,
      dayNumber: index
    }))
    return data.length === arrSize &&
      <VictoryTraderPresenter meal={meal} data={data} />
  }
}

const mapState = state => ({
  stateMeal: state.currentMeal,
  user: state.user,
  notForSale: state.notForSale
})

const mapDispatch = dispatch => ({
  setMeal(meal) {
    dispatch(setCurrentMeal(meal))
  },
  loadNotForSale(user) {
    dispatch(fetchNotForSale(user.id))
  }
})

const VictoryContainer = withRouter(connect(mapState, mapDispatch)(VictoryContainerClass))
export default VictoryContainer
