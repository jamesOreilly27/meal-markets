import React from 'react'
import QRCode from 'qrcode.react'

const QRPresenter = ({match}) => match && <QRCode value={match.params.orderId} />

export default QRPresenter
