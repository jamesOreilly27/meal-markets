import React from 'react'
import SwatchFilter from './SwatchFilterPresenter'
import VictoryContainer from '../containers/VictoryContainer'
import BuyPanel from './BuyPanelPresenter'
import SellPanel from './SellPanelPresenter'

const TradersLandingPresenter = ({ meals, sellableOrders, putOrder, userId }) => (
  <div className="trader-landing">
    <div className="trader-main">
      <div className="trader-chart">
        <VictoryContainer />
      </div>
      <div className="trader-sidebar">
        <SwatchFilter meals={meals} />
      </div>
    </div>
    <div className="buy-sell-panels">
      <BuyPanel
        className="buy-panel"
        sellableOrders={sellableOrders}
        putOrder={putOrder}
        userId={userId} />
      <SellPanel className="sell-panel" />
    </div>
  </div>
)

export default TradersLandingPresenter

