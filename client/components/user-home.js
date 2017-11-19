import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const UserHome = ({ email }) => (
  <div>
    <h3>Welcome, {email}</h3>
  </div>
)

const mapState = (state) => ({
  email: state.user.email
})

export default withRouter(connect(mapState)(UserHome))

UserHome.propTypes = {
  email: PropTypes.string
}
