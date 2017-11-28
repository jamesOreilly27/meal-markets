import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const BuyPanel = () => (
  <div>
    <h2>Buy Panel</h2>
    <p>Use this panel to make bulk purchases of the currently selected meal</p>

    <select>
      <option value={1}>Meal - Price: $10.00</option>
    </select>

    <Button onClick={() => console.log('Hello!')}>Buy</Button>
  </div>
)

const mapState = state => ({

})

const mapDispatch = dispatch => {

}

const BuyPanelContainer = withRouter(connect(mapState, mapDispatch)(BuyPanel))
export default BuyPanelContainer
