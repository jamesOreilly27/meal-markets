import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { updateForSale } from '../../store'

const SellPanel = ({ notForSale, listForSale }) => (
  <div>
    <h2>Sell Panel</h2>
    <p>Use this panel to list meals that you currently own for sale, declaring prices on the secondary market</p>
    <form onSubmit={event => {
      const sellForm = event.target
      event.preventDefault()
      listForSale(sellForm.selectedMeal.value, sellForm.price.value)
      sellForm.selectedMeal.value = 'Select a meal'
      sellForm.price.value = ''
      sellForm.price.placeholder = 'list price, in cents'
    }}>
      <h4>Select a meal to list for sale:</h4>
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
      <h4>Enter your list price (in cents)</h4>
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
