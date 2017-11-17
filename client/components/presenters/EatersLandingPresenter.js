import React from 'react'
import Banner from './BannerPresenter'
import RibbonPresenter from './RibbonPresenter'

const EatersLandingPresenter = ({ meals, blurbs }) => (
  <div>
    <Banner />
    <RibbonPresenter meals={meals} blurb={blurbs.hot} />
    <RibbonPresenter meals={meals} blurb={blurbs.cheap} />
  </div>
)

export default EatersLandingPresenter
