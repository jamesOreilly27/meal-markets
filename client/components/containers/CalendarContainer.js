import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
// import { fetchUserMeals } from '../../store'
import CalendarPresenter from '../presenters/CalendarPresenter'

const events = [
    {
        title: 'Meal Pickup: Pokebowl',
        start: new Date(2017, 10, 20),
        end: new Date(2017, 10, 20)
    },
    {
        title: 'Meal Pickup: Sushi',
        start: new Date(2017, 10, 25),
        end: new Date(2017, 10, 25)
    },

    {
        title: 'Meal Pickup: Burrito Bowl',
        start: new Date(2017, 10, 30),
        end: new Date(2017, 10, 30)
    }
]

class CalendarContainer extends Component {
    render() {
        return (
            <div className="calendar">
                <CalendarPresenter events={events} />
            </div>
        )
    }
}

export default CalendarContainer
