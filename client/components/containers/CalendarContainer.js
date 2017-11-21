import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { fetchUserMeals } from '../../store'
import CalendarPresenter from '../presenters/CalendarPresenter'

class CalendarContainerClass extends Component {
    componentDidMount() {
        this.props.getUserMeals(1)
    }

    render() {
        const { userMeals } = this.props
        const events = userMeals.map(meal => (
            {
                title: `Meal Pick-up: ${meal.name}`,
                start: new Date(meal.pickupDate),
                end: new Date(meal.pickupDate)
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
    userMeals: state.userMeals
})

const mapDispatch = dispatch => ({
    getUserMeals(userId) {
        dispatch(fetchUserMeals(userId))
    }
})

const CalendarContainer = connect(mapState, mapDispatch)(CalendarContainerClass)
export default CalendarContainer
