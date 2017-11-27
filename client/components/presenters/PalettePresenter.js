import React from 'react'
import MealSwatch from './MealSwatch'

const PalettePresenter = ({ meals }) => (
  <div>
    { meals.map(meal =>
      <MealSwatch key={meal.id} meal={meal} />
    )}
  </div>
)

export default PalettePresenter
