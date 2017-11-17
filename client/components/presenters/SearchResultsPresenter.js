import React from 'react'
import { MealCardPresenter } from '../index'

const SearchResultsPresenter = ({ meals }) => (
  <div>
    <h1>Filtered Results</h1>
    {meals.map(meal => {
      return <MealCardPresenter key={meal.id} meal={meal} />
    })}
  </div>
)

export default SearchResultsPresenter
