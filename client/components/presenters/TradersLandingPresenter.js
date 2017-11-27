import React from 'react'
import Palette from './PalettePresenter'
import SwatchFilter from './SwatchFilterPresenter'
import TraderProfile from './TraderProfilePresenter'

const TradersLandingPresenter = ({ meals }) => (
  <div className="trader-landing">
    <div className="trader-main">
      <Palette meals={meals} />
    </div>
    <div className="trader-sidebar">
      <SwatchFilter />
      <TraderProfile />
    </div>
  </div>
)

export default TradersLandingPresenter
