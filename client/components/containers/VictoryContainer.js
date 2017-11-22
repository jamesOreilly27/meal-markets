import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VictoryPresenter from '../presenters/VictoryPresenter'

class VictoryContainerClass extends Component {
  render() {
    // TEST DATA, NEEDS TO BE REPLACED WITH REFERENCE TO STORE
    const meal = {basePrice: 8, inStorePrice: 12}
    const data = []
    const tickValues = []
    for (let i = 0; i < 30; i++) {
      data.push({
        basePrice: meal.basePrice,
        inStorePrice: meal.inStorePrice,
        dayNumber: i
      })
      tickValues.push(i)
    }
    return (
      <VictoryPresenter
        data={data}
        tickValues={tickValues}
      />
    )
  }
}

const mapState = state => ({
  meal: state.currentMeal
})

const VictoryContainer = withRouter(connect(mapState)(VictoryContainerClass))
export default VictoryContainer
