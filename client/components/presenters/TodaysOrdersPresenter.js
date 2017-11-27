import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOpenOrders, fetchTodaysOrders } from '../../store'
import Order from './OrderPresenter'

class OrderList extends Component {

  componentDidMount() {
    if (this.props.filter === 'open') this.props.loadOpenOrders()
    else if (this.props.filter === 'today') this.props.loadTodaysOrders()
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

const mapDispatch = (dispatch, ownProps) => ({
  loadOpenOrders() {
    dispatch(fetchOpenOrders(ownProps.user))
  },

  loadTodaysOrders() {
    dispatch(fetchTodaysOrders(ownProps.user))
  }
})

export default connect(mapState, mapDispatch)(OrderList)
