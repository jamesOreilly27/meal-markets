import React from 'react'
import QRCode from 'qrcode.react'

const QRPresenter = ({match}) => (
  <div style={{ margin: '20vh 35vw' }}>
    {match &&
      <QRCode value={match.params.orderId} />
    }
  </div>
)

export default QRPresenter

// {`http://172.16.23.60:8080/api/orders/redeemable/${match.params.orderId}`} />