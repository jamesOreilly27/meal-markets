import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { auth } from '../../store'
import AuthFormPresenter from '../presenters/AuthFormPresenter'

const mapState = state => ({
  displayName: 'Login',
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit (email, password) {
    dispatch(auth(email, password))
  }
})

const LoginContainer = withRouter(connect(mapState, mapDispatch)(AuthFormPresenter))
export default LoginContainer
