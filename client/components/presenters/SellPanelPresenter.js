import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { updateForSale } from '../../store'

const SellPanel = ({ notForSale, listForSale }) => (
  <div className="sell-panel">
    <h2 className="panel-heading">Sell Panel</h2>
    <form
      style={{ marginTop: '.5em' }}
      onSubmit={event => {
      const sellForm = event.target
      event.preventDefault()
      listForSale(sellForm.selectedMeal.value, sellForm.price.value)
      sellForm.selectedMeal.value = 'Select a meal'
      sellForm.price.value = ''
      sellForm.price.placeholder = 'list price, in cents'
    }}>
      <select
        className="form-control"
        name="selectedMeal"
        type="selectedMeal"
        defaultValue="Select a meal"
      >
        <option disabled>Select a meal</option>
        {notForSale.map(meal =>
          <option key={meal.id} value={meal.order.id}>{meal.name}</option>)}
      </select>
      <input
        className="form-control"
        name="price"
        type="price"
        placeholder="list price, in cents"
      />
      <Button type="submit">List for Sale</Button>
    </form>
  </div>
)

const mapState = state => ({
  user: state.user,
  currentMeal: state.currentMeal,
  notForSale: state.notForSale
})

const mapDispatch = dispatch => ({
  listForSale(orderId, price) {
    dispatch(updateForSale(orderId, price))
  }
})

const SellPanelContainer =  withRouter(connect(mapState, mapDispatch)(SellPanel))
export default SellPanelContainer
