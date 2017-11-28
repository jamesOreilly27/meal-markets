import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authSignup, authRestaurantSignup } from '../../store'
import AuthFormPresenter from '../presenters/AuthFormPresenter'

const mapState = state => ({
  displayName: 'Sign Up',
  isSignup: true,
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit(name, zipcode, email, method, password, role) {
    dispatch(authSignup(name, zipcode, email, method, password, role))
  },

  handleRestaurantSubmit(restaurantId, email, password) {
    dispatch(authRestaurantSignup(restaurantId, email, password))
  }
})

const SignupContainer = withRouter(connect(mapState, mapDispatch)(AuthFormPresenter))
export default SignupContainer
