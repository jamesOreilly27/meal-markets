import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOpenOrders, fetchTodaysOrders, fetchAllMealsAndUsers } from '../../store'
import Order from './OrderPresenter'

class OrderList extends Component {

  componentDidMount() {
    this.props.loadOpenOrders(this.props.user)
    this.props.loadTodaysOrders(this.props.user)
    this.props.loadMealAndUserData()
  }

  render() {
    return (
      <div>
          <div>
            {this.props.filter === 'open' ?
            <div>
              <h3>Open Orders</h3>
              {(this.props.orders && this.props.meals)
                && this.props.orders.map(order => {
                  return <Order key={order.id} order={order} meals={this.props.meals} />
              })}
            </div>
            :
            <div>
              <h3>Todays Orders</h3>
              {(this.props.redeemableOrders && this.props.meals)
                && this.props.redeemableOrders.map(order => {
                  return <Order key={order.id} order={order} meals={this.props.meals} />
                })}
            </div>
            }
          </div>
      </div>
    )
  }
}

const mapState = ({ user, orders, redeemableOrders, meals }) => ({ user, orders, redeemableOrders, meals })

const mapDispatch = dispatch => ({
  loadOpenOrders(owner) {
    dispatch(fetchOpenOrders(owner))
  },

  loadTodaysOrders(owner) {
    dispatch(fetchTodaysOrders(owner))
  },

  loadMealAndUserData() {
    dispatch(fetchAllMealsAndUsers())
  }
})

export default connect(mapState, mapDispatch)(OrderList)
