import React from 'react'
import Palette from './PalettePresenter'
import SwatchFilter from './SwatchFilterPresenter'
import TraderProfile from './TraderProfilePresenter'
import VictoryContainer from '../containers/VictoryContainer'
import BuyPanel from './BuyPanelPresenter'
import SellPanel from './SellPanelPresenter'

const TradersLandingPresenter = ({ currentMeal, meals, sellableOrders, putOrder, userId }) => (
  <div className="trader-landing">
    <div className="trader-main">
      <Palette meals={meals} />
      <div className="trader-dashboard">
        <div className="trader-chart">
          <VictoryContainer />
        </div>
        <div className="buy-sell-panels">
          <BuyPanel
            currentMeal={currentMeal}
            sellableOrders={sellableOrders}
            putOrder={putOrder}
            userId={userId} />
          <SellPanel />
        </div>
      </div>
    </div>
    <div className="trader-sidebar">
      <SwatchFilter meals={meals} />
      <TraderProfile />
    </div>
  </div>
)

export default TradersLandingPresenter
