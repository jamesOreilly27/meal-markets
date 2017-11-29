import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn, user }) => (
  <div>
    <nav>
      {
        isLoggedIn
          ? <div>
              <NavLink to="/restaurant/home">Restaurant Home</NavLink>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/eat">Eat</NavLink>
              <NavLink to="/calendar">Calendar</NavLink>
              <NavLink to="/victory">Test Chart</NavLink>
              <NavLink to="/trade">Trade</NavLink>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
          : <div>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
      }
    </nav>
    <hr />
  </div>
)

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  userId: state.user.id,
  isAdmin: !!state.user.isAdmin
})

const mapDispatch = (dispatch) => ({
  handleClick () {
    dispatch(logout())
  }
})

export default withRouter(connect(mapState, mapDispatch)(Navbar))

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
