import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentMeal } from '../../store'

const MealSwatch = ({ meal }) => (
  <div className="swatch">
    <img src={meal.image} />
  </div>
)

const mapDispatch = dispatch => ({
  setChartMeal(meal) {
    dispatch(setCurrentMeal(meal))
  }
})

const MealSwatchContainer = withRouter(connect(null, mapDispatch)(MealSwatch))
export default MealSwatchContainer

