import React, { Component } from 'react'
import BuyNowPresenter from '../presenters/BuyNowPresenter'

class BuyNowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      mealQuantity: 0,
      mealDaysToPickup: 0
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    const arrSize = 30
    const data = new Array(arrSize).fill(0).map((el, index) => ({
      basePrice: this.props.meal.basePrice / 100,
      inStorePrice: this.props.meal.inStorePrice / 100,
      dayNumber: index
    }))
    return (
      <div>
        <BuyNowPresenter
          openModal={this.openModal}
          closeModal={this.closeModal}
          showModal={this.state.showModal}
          meal={this.props.meal}
          data={data}
        />
      </div>
    )
  }
}

export default BuyNowContainer
