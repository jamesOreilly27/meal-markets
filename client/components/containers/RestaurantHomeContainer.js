import React, { Component } from 'react'
import OrderList from '../presenters/OrderList'
import QrReader, { openImageDialog } from 'react-qr-reader'

export default class RestaurantHome extends Component {

  handleScan(data) {
    console.log(data)
  }

  render() {
    return (
      <div onClick={openImageDialog}>
        {console.log('TEST', openImageDialog)}
          <QrReader
            onScan={this.handleScan}
            onError={err => console.error(err)}
            delay={5000}
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

