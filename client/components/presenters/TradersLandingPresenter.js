import React from 'react'
import { Grid, Button, Modal, OverlayTrigger } from 'react-bootstrap'

const TradersLandingPresenter = ({ meals, blurbs, hasRedeemable, openModal, closeModal, showModal }) => (
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
      <h4>Text in a modal</h4>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

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

export default TradersLandingPresenter
