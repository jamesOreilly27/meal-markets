import React from 'react'
import Banner from './BannerPresenter'
import RibbonPresenter from './RibbonPresenter'
import RedeemOrderContainer from '../containers/RedeemOrderContainer'

import { Grid, Button, Modal, OverlayTrigger } from 'react-bootstrap'

const EatersLandingPresenter = ({ meals, blurbs, hasRedeemable, openModal, closeModal, showModal }) => (
  <div>
    {hasRedeemable &&
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={openModal}
      >
        Redeem Meals
      </Button>
    }
    <Modal show={showModal} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Redeem your meal</h4>
      <p>Meal Redemptions are final. You will not be able to resell this meal after clicking your meal's link</p>

{
      // <h4>Popover in a modal</h4>
      // <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

      // <h4>Tooltips in a modal</h4>
      // <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
    }

      <hr />

      <RedeemOrderContainer />
      
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
    <Grid>
      <Banner />
      <RibbonPresenter meals={meals} blurb={blurbs.hot} />
      <RibbonPresenter meals={meals} blurb={blurbs.cheap} />
    </Grid>
  </div>
)

export default EatersLandingPresenter
