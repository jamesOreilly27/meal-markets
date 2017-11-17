import { connect } from 'react-redux'
import { auth } from '../../store'
import AuthFormPresenter from '../presenters/AuthFormPresenter'

const mapState = state => ({
  displayName: 'Login',
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit (name, email, password) {
    dispatch(auth(email, password, name))
  }
})

export const Login = connect(mapState, mapDispatch)(AuthFormPresenter)
