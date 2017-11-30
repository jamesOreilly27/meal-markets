import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAllMeals, fetchForSaleOrders } from '../../store'
import TradersLandingPresenter from '../presenters/TradersLandingPresenter'

class TradersLandingContainerClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: []
    }
  }
  componentDidMount() {
    this.props.fetchAllMeals()
    this.props.fetchForSaleOrders()
  }
  render() {
    const { meals, sellableOrders, userId } = this.props
    return (
      <div>
        {meals &&
          <TradersLandingPresenter
            meals={meals}
            sellableOrders={sellableOrders}
            userId={userId} />
        }
      </div>
    )
  }
}

const mapState = state => ({
  currentMeal: state.currentMeal,
  userId: state.user.id,
  meals: state.meals,
  sellableOrders: state.sellableOrders.filter(order => order.userId !== state.user.id && order.mealId === state.currentMeal.id)
})

const mapDispatch = dispatch => ({
  fetchAllMeals() {
    dispatch(fetchAllMeals())
  },
  fetchForSaleOrders() {
    dispatch(fetchForSaleOrders())
  }
})

const TradersLandingContainer = withRouter(connect(mapState, mapDispatch)(TradersLandingContainerClass))
export default TradersLandingContainer
