import React from 'react'
import MealCard from './MealCardPresenter'
import Blurb from './BlurbPresenter'

const Ribbon = ({ meals, blurb }) => (

  <div>
    {
      // meals && 
    }
    <Blurb blurb={blurb} />
    <div>
    { meals.map(meal =>
      <MealCard key={meal.id} meal={meal} />
    )}
    </div>
  </div>
)

export default Ribbon
