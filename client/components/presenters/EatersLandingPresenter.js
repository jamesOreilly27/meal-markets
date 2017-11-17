import React from 'react'
import RibbonPresenter from './RibbonPresenter'

const EatersLandingPresenter = ({ meals, blurbs }) => (
  <div>
    <h2>I am EatersLandingPresenter. Give me content.</h2>
    <RibbonPresenter meals={meals} blurb={blurbs.hot} />
    <RibbonPresenter meals={meals} blurb={blurbs.cheap} />
  </div>
)

export default EatersLandingPresenter
