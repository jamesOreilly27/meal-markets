import React from 'react'
import QRCode from 'qrcode.react'

const QRPresenter = ({match}) => (
  match &&
    <QRCode value={`http://172.16.23.60:8080/redeem/${match.params.orderId}`} />
)

export default QRPresenter

// {`http://172.16.23.60:8080/api/orders/redeemable/${match.params.orderId}`} />