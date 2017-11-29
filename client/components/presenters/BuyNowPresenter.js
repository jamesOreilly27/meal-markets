import React from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import VictoryPresenter from './VictoryPresenter'
import { getCurrentPrice } from '../../utils'

const BuyNowPresenter = ({ closeModal, data, meal, openModal, purchase, showModal, user }) =>
  (
    <div>
      <Button id="view-prices-button"onClick={openModal}>View Prices</Button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{meal.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <VictoryPresenter data={data} />
          <form>
            <select className="form-control">
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
            <input className="form-control" type="quantity" placeholder="Quantity" />
            <Button onClick={() => purchase(user, 5, meal, getCurrentPrice(meal.basePrice, meal.inStorePrice, ))}>Purchase</Button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  purchase(user, quantity, meal, currentPrice) {
    dispatch(createOrder(user, quantity, meal, currentPrice))
  }
})

const BuyNow = withRouter(connect(mapState, mapDispatch)(BuyNowPresenter))
export default BuyNow
