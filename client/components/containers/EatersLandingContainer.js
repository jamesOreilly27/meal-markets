import React, { Component } from 'react'
import { connect, withRouter } from 'react-redux'
import fetchMeals from '../../store'
import EatersLandingPresenter from '../presenters/EatersLandingPresenter'

class EatersLandingContainerClass extends Component {
  componentDidMount() {
    this.props.fetchMeals(this.props.zip)
  }
  render() {
    const { meals } = this.props
    return (
      <div>
        <EatersLandingPresenter meals={meals} />
      </div>
    )
  }
}

const mapState = state => ({
  zip: state.user.zipcode,
  meals: state.meals
})

const mapDispatch = dispatch => ({
  fetchMeals(zip) {
    dispatch(fetchMeals(zip))
  }
})

const EatersLandingContainer = connect(withRouter(mapState, mapDispatch)(EatersLandingContainerClass))
export default EatersLandingContainer
