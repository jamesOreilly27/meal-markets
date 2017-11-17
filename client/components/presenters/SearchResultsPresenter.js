import React from 'react'
import { MealCardPresenter } from '../index'

const SearchResultsPresenter = ({ filteredMeals }) => (
  <div>
    <h1>Filtered Results</h1>
    {filteredMeals.map(meal => {
      return <MealCardPresenter key={meal.id} meal={meal} />
    })}
  </div>
)

export default SearchResultsPresenter
