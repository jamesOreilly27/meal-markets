import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentMeal } from '../../store'

const MealSwatch = ({ meal }) => (
  <img src={meal.image} />
)

const mapDispatch = dispatch => ({
  setChartMeal(meal) {
    dispatch(setCurrentMeal(meal))
  }
})

const MealSwatchContainer = withRouter(connect(null, mapDispatch)(MealSwatch))
export default MealSwatchContainer

