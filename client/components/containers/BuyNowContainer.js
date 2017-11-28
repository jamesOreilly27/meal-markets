import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../store'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import VictoryPresenter from '../presenters/VictoryPresenter'
import { getCurrentPrice } from '../../utils'

class BuyNowContainerClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      mealQuantity: '',
      mealDaysToPickup: 0
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleDaysChange = this.handleDaysChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  openModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  handleDaysChange(evt) {
    this.setState({ mealDaysToPickup: +evt.target.value })
  }

  handleQuantityChange(evt) {
    this.setState({ mealQuantity: evt.target.value })
  }

  render() {
    const { meal, purchase, user } = this.props
    const DAYS_IN_MONTH = 30
    const data = new Array(DAYS_IN_MONTH).fill(0).map((el, index) => ({
      basePrice: this.props.meal.basePrice / 100,
      inStorePrice: this.props.meal.inStorePrice / 100,
      dayNumber: index
    }))
    const futureDate = new Date()

    return (
      <div>
        <Button onClick={this.openModal}>View Prices</Button>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{meal.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <VictoryPresenter data={data} />
            <form>
              <h5>Days To Pick-Up</h5>
              <select
                className="form-control"
                value={this.state.mealDaysToPickup}
                onChange={this.handleDaysChange}>

                {data.map(day =>
                  <option key={day.dayNumber} value={day.dayNumber}>{day.dayNumber}</option>
                )}
              </select>
              
              <h5>Quantity</h5>
              <input
                className="form-control"
                type="quantity" placeholder="Quantity"
                onChange={this.handleQuantityChange}
                value={this.state.mealQuantity} />

              <Button onClick={() => {
                futureDate.setDate(futureDate.getDate() + this.state.mealDaysToPickup)
                futureDate.setHours(10, 0, 0, 0)
                purchase(user.id,
                  +this.state.mealQuantity,
                  meal,
                  futureDate,
                  getCurrentPrice(meal.basePrice, meal.inStorePrice, this.state.mealDaysToPickup))
                this.setState({
                  showModal: false,
                  mealQuantity: '',
                  mealDaysToPickup: 0
                })
              }}>Purchase</Button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  purchase(userId, quantity, meal, pickupDate, purchasePrice) {
    dispatch(createOrder(userId, quantity, meal, pickupDate, purchasePrice))
  }
})

const BuyNowContainer = withRouter(connect(mapState, mapDispatch)(BuyNowContainerClass))
export default BuyNowContainer

