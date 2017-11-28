import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOpenOrders, fetchTodaysOrders } from '../../store'
import Order from './OrderPresenter'

class OrderList extends Component {

  componentDidMount() {
    if (this.props.filter === 'open') this.props.loadOpenOrders(this.props.user)
    else if (this.props.filter === 'today') this.props.loadTodaysOrders(this.props.user)
  }

  render() {
    return (
      <div>
        {console.log(this.props.orders)}
        {this.props.orders && this.props.orders.map(order => {
          return <Order key={order.id} order={order} />
        })}
      </div>
    )
  }
}

const mapState = ({ user, orders }) => ({ user, orders })

const mapDispatch = dispatch => ({
  loadOpenOrders(owner) {
    dispatch(fetchOpenOrders(owner))
  },

  loadTodaysOrders(owner) {
    dispatch(fetchTodaysOrders(owner))
  }
})

export default connect(mapState, mapDispatch)(OrderList)
