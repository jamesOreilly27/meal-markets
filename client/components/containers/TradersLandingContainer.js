import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAllMeals } from '../../store'
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
  }
  render() {
    const { meals } = this.props
    return (
      <div>
        {meals &&
          <TradersLandingPresenter meals={meals} />
        }
      </div>
    )
  }
}

const mapState = state => ({
  userId: state.user.id,
  meals: state.meals,
})

const mapDispatch = dispatch => ({
  fetchAllMeals() {
    dispatch(fetchAllMeals())
  }
})

const TradersLandingContainer = withRouter(connect(mapState, mapDispatch)(TradersLandingContainerClass))
export default TradersLandingContainer
