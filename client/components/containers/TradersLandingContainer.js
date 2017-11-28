import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAllMeals, fetchSellableOrders } from '../../store'
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
    this.props.fetchSellableOrders()
  }
  render() {
    const { meals, sellableOrders } = this.props
    return (
      <div>
        {meals &&
          <TradersLandingPresenter meals={meals} sellableOrders={sellableOrders} />
        }
      </div>
    )
  }
}

const mapState = state => ({
  userId: state.user.id,
  meals: state.meals,
  sellableOrders: state.sellableOrders.filter( order => order.userId !== state.user.id)
})

const mapDispatch = dispatch => ({
  fetchAllMeals() {
    dispatch(fetchAllMeals())
  },
  fetchSellableOrders() {
    dispatch(fetchSellableOrders())
  }
})

const TradersLandingContainer = withRouter(connect(mapState, mapDispatch)(TradersLandingContainerClass))
export default TradersLandingContainer
