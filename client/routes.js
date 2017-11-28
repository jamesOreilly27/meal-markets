import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Navbar, Login, Signup, UserHome, EatersLanding, TradersLanding, Victory, RedeemConfirmation, Calendar, RestaurantHome } from './components'
import QRPresenter from './components/presenters/QRPresenter'
import { me } from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            {/*<Route exact path="/" component={EatersLanding} />*/}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  <Route exact path="/home" component={UserHome} />
                  <Route exact path="/eat" component={EatersLanding} />
                  <Route exact path="/victory" component={Victory} />
                  <Route exact path="/users/:orderId/redeem" component={QRPresenter} />
                  <Route exact path="/redeem/:orderId" component={RedeemConfirmation} />
                  <Route exact path="/calendar" component={Calendar} />
                  <Route path="/restaurant/home" component={RestaurantHome} />
                  <Route exact path="/trade" component={TradersLanding} />
                </Switch>
            }
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
  // Otherwise, state.user will be an empty object, and state.user.id will be falsey
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(me())
  }
})

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
