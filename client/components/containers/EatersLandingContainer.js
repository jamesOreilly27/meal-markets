import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchMeals } from '../../store'
import EatersLandingPresenter from '../presenters/EatersLandingPresenter'

class EatersLandingContainerClass extends Component {
  componentDidMount() {
    this.props.fetchMeals(this.props.zip)
  }
  render() {
    const { meals } = this.props
    const blurbs = {
      hot: {title: 'Hot Meals', description: 'Check out the hottest meals in town. These delicious dishes are available today.'},
      cheap: {title: 'Hot Deals', description: 'Want to save a quick buck? Here are some of the best value buys on the market right now'},
    }
    return (
      <div>
        {meals &&
          <EatersLandingPresenter meals={meals} blurbs={blurbs} />
        }
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

const EatersLandingContainer = withRouter(connect(mapState, mapDispatch)(EatersLandingContainerClass))
export default EatersLandingContainer
