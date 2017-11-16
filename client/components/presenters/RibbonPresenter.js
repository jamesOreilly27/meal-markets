import React from 'react'
import MealCard from './MealCardPresenter'
import Blurb from './BlurbPresenter'

const Ribbon = ({ meals, blurb }) => (
  <div>
    <Blurb blurb={blurb} />
    <div>
    { meals.map(meal =>
      <MealCard />
    )}
    </div>
  </div>
)

export default Ribbon
