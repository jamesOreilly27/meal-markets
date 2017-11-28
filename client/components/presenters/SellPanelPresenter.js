import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { updateForSale } from '../../store'

const SellPanel = ({ notForSale, listForSale }) => (
  <div>
    <h2>Sell Panel</h2>
    <p>Use this panel to list meals that you currently own for sale, declaring prices on the secondary market</p>
    <form onSubmit={(event) => {
      console.log(event.target.selectedMeal.value)
      event.preventDefault()
      listForSale(event.target.selectedMeal.value, event.target.price.value)
    }}>
      <h4>Select a meal to list for sale:</h4>
      <select
        className="form-control"
        name="selectedMeal"
        type="selectedMeal"
      >
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
