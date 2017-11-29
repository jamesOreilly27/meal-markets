import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCurrentMeal } from '../../store'
import { Table } from 'react-bootstrap'

const SwatchFilter = ({ meals, setChartMeal }) => (
  <div>
    <h2>Filter</h2>
    <p>Click the tags below to filter the swatches on the trading palette</p>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Meal</th>
          <th>90d Low</th>
          <th>90d High</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        { meals.map(meal => (
          <tr key={meal.id} meal={meal} onClick={() => setChartMeal(meal)}>
            <td>{meal.id}</td>
            <td>{meal.name}</td>
            <td>{+meal.basePrice / 100}</td>
            <td>{+meal.inStorePrice / 100}</td>
            <td>0</td>
          </tr>
        )
      )}
      </tbody>
    </Table>
  </div>
)

const mapDispatch = dispatch => ({
  setChartMeal(meal) {
    dispatch(setCurrentMeal(meal))
  }
})

const SwatchFilterContainer = withRouter(connect(null, mapDispatch)(SwatchFilter))
export default SwatchFilterContainer
