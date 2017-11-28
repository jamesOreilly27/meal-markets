import React, { Component } from 'react'
import OrderList from '../presenters/OrderList'
import QrReader from 'react-qr-reader'
import { connect } from 'react-redux'
import { fulfillOrderThunk } from '../../store'
import { withRouter } from 'react-router-dom'
import history from '../../history'

class RestaurantHome extends Component {
  constructor(props) {
    super(props)

    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    history.push(`/redeem/${data}`)
  }

  render() {
    return (
      <div>
          <QrReader
            onScan={data => {
              console.log('DATA', typeof data, data)
              this.handleScan(data)
            }}
            onError={err => console.error(err)}
            delay={10000}
            style={{ width: '50vw', margin: '5vh 25vw 15vh 25vw ', height: '20vh' }}
            showViewFinder={false}
          />
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 10vw'
        }}>
          <OrderList filter="open" />
          <OrderList filter="today" />
        </div>
      </div>
    )
  }
}

const mapState = ({ orders }) => ({ orders })

// const mapDispatch = dispatch => {
//   return {
//     updateOrder(order) {
//       dispatch(fulfillOrderThunk(order))
//     }
//   }
// }

export default withRouter(connect(mapState)(RestaurantHome))

