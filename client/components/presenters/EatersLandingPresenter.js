import React from 'react'
import Banner from './BannerPresenter'
import RibbonPresenter from './RibbonPresenter'
import RedeemMealContainer from '../containers/RedeemMealContainer'

import { Grid } from 'react-bootstrap'

const EatersLandingPresenter = ({ meals, blurbs, hasRedeemable }) => (
  <div>
    {hasRedeemable &&
      <RedeemMealContainer />
    }
    <Grid>
      <Banner />
      <RibbonPresenter meals={meals} blurb={blurbs.hot} />
      <RibbonPresenter meals={meals} blurb={blurbs.cheap} />
    </Grid>
  </div>
)

export default EatersLandingPresenter
