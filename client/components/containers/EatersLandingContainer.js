import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchMeals, getRedeemableOrders } from '../../store'
import EatersLandingPresenter from '../presenters/EatersLandingPresenter'

class EatersLandingContainerClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    this.props.fetchMeals(this.props.zip)
    this.props.findRedeemable(this.props.userId)
  }
  openModal() {
    this.setState({showModal: true})
  }
  closeModal() {
    this.setState({showModal: false})
  }
  render() {
    const { meals, hasRedeemable } = this.props
    const blurbs = {
      hot: {title: 'Hot Meals', description: 'Check out the hottest meals in town. These delicious dishes are available today.'},
      cheap: {title: 'Hot Deals', description: 'Want to save a quick buck? Here are some of the best value buys on the market right now'},
    }
    return (
      <div>
        {meals &&
          <EatersLandingPresenter
            meals={meals}
            blurbs={blurbs}
            hasRedeemable={hasRedeemable}
            openModal={this.openModal}
            closeModal={this.closeModal}
            showModal={this.state.showModal}
          />
        }
      </div>
    )
  }
}

const mapState = state => ({
  userId: state.user.id,
  zip: state.user.zipcode,
  meals: state.meals,
  hasRedeemable: !!state.redeemableOrders.length
})

const mapDispatch = dispatch => ({
  fetchMeals(zip) {
    dispatch(fetchMeals(zip))
  },
  findRedeemable(userId) {
    dispatch(getRedeemableOrders(userId))
  }
})

const EatersLandingContainer = withRouter(connect(mapState, mapDispatch)(EatersLandingContainerClass))
export default EatersLandingContainer
