import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOpenOrders, fetchTodaysOrders } from '../../store'
import Order from './OrderPresenter'

class OrderList extends Component {

  componentDidMount() {
    this.props.loadOpenOrders(this.props.user)
    this.props.loadTodaysOrders(this.props.user)
  }

  render() {
    return (
      <div>
        {this.props.filter === 'open' ?
        <div>
          {this.props.orders
            && this.props.orders.map(order => {
              return <Order key={order.id} order={order} />
          })}
        </div>
        :
        <div>
          {(this.props.redeemableOrders && this.props.filter === 'today')
            && this.props.redeemableOrders.map(order => {
              return <Order key={order.id} order={order} />
            })}
        </div>
        }
      </div>
    )
  }
}

const mapState = ({ user, orders, redeemableOrders }) => ({ user, orders, redeemableOrders })

const mapDispatch = dispatch => ({
  loadOpenOrders(owner) {
    dispatch(fetchOpenOrders(owner))
  },

  loadTodaysOrders(owner) {
    dispatch(fetchTodaysOrders(owner))
  }
})

export default connect(mapState, mapDispatch)(OrderList)
