import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { fetchUserOrders } from '../../store'
import CalendarPresenter from '../presenters/CalendarPresenter'

// const events = [
//     {
//         title: 'Meal Pickup: Pokebowl',
//         start: new Date(2017, 10, 20),
//         end: new Date(2017, 10, 20)
//     },
//     {
//         title: 'Meal Pickup: Sushi',
//         start: new Date(2017, 10, 25),
//         end: new Date(2017, 10, 25)
//     },

//     {
//         title: 'Meal Pickup: Burrito Bowl',
//         start: new Date(2017, 10, 30),
//         end: new Date(2017, 10, 30)
//     }
// ]

class CalendarContainerClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        this.props.getUserOrders(1)
    }

    render() {
        return (
            <div className="calendar">
                <CalendarPresenter events={this.state.events} />
            </div>
        )
    }
}

const mapState = state => ({
    events: state.orders.map(order => ({
        title: `Meal Pickup: ${order.meal.name}`,
        start: order.pickupDate,
        end: order.pickupDate
    }))
})

const mapDispatch = dispatch => ({
    getUserOrders(userId) {
        dispatch(fetchUserOrders(userId))
    }
})

const CalendarContainer = connect(mapState, mapDispatch)(CalendarContainerClass)
export default CalendarContainer
