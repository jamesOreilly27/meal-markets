import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import VictoryPresenter from '../presenters/VictoryPresenter'
const fakeMeal = { basePrice: 8, inStorePrice: 12 }
// NEED TO GET RID OF FAKE MEAL AND CHANGE TEAL TO MEAL
const Victory = ({ meal = fakeMeal }) => {
  const data = new Array(30).fill(0).map((el, index) => ({
    basePrice: meal.basePrice,
    inStorePrice: meal.inStorePrice,
    dayNumber: index
  }))
  return <VictoryPresenter data={data} />
}

const mapState = state => ({
  // NEED TO CHANGE TEAL TO MEAL
  teal: state.currentMeal
})

const VictoryContainer = withRouter(connect(mapState)(Victory))
export default VictoryContainer
