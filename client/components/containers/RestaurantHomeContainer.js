import React, { Component } from 'react'
import OrderList from '../presenters/OrderList'
import QrReader from 'react-qr-reader'
import { connect } from 'react-redux'
import RedeemConfirmationContainerClass from './RedeemConfirmationContainer'

class RestaurantHome extends Component {
  constructor(props) {
    super(props)

    this.state = { data: false }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    !!data && this.setState({ data })
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
        { !!this.state.data && <RedeemConfirmationContainerClass orderId={this.state.data} /> }
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

export default connect(mapState)(RestaurantHome)

