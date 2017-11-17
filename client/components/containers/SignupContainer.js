import { connect } from 'react-redux'
import { auth } from '../../store'
import AuthFormPresenter from '../presenters/AuthFormPresenter'

const mapState = state => ({
  displayName: 'Sign Up',
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit (name, email, password, paymentInfo) {
    dispatch(auth(email, password, name, paymentInfo))
  }
})

const SignupContainer = connect(mapState, mapDispatch)(AuthFormPresenter)
export default SignupContainer
