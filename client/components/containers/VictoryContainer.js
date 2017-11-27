import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VictoryPresenter from '../presenters/VictoryPresenter'
import setCurrentMeal from '../../store'

class VictoryContainerClass extends Component {
  componentDidMount() {
    const { setMeal, propMeal } = this.props
    propMeal && setMeal(propMeal)
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
      <VictoryPresenter meal={meal} data={data} />
  }
}

const mapState = state => ({
  stateMeal: state.currentMeal
})

const mapDispatch = dispatch => ({
  setMeal(meal) {
    dispatch(setCurrentMeal(meal))
  }
})

const VictoryContainer = withRouter(connect(mapState, mapDispatch)(VictoryContainerClass))
export default VictoryContainer
