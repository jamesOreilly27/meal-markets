import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { fetchUserMeals } from '../../store'
import CalendarPresenter from '../presenters/CalendarPresenter'

class CalendarContainerClass extends Component {
  componentDidMount() {
    const { getUserMeals, userId } = this.props
    getUserMeals(userId)
  }

  render() {
    const { userMeals } = this.props
    const events = userMeals.map(meal => (
      {
        title: `Meal Pick-up: ${meal.name} - Qty: ${meal.order.quantity}`,
        start: new Date(meal.order.pickupDate),
        end: new Date(meal.order.pickupDate)
      }
    ))

    return (
      <div className="calendar">
        <CalendarPresenter events={events} />
      </div>
    )
  }
}

const mapState = state => ({
  userMeals: state.userMeals,
  userId: state.user.id
})

const mapDispatch = dispatch => ({
  getUserMeals(userId) {
    dispatch(fetchUserMeals(userId))
  }
})

const CalendarContainer = connect(mapState, mapDispatch)(CalendarContainerClass)
export default CalendarContainer
