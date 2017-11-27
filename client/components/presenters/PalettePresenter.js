import React from 'react'
import MealSwatch from './MealSwatchPresenter'

const PalettePresenter = ({ meals }) => (
  <div className="palette">
    { meals.map(meal =>
      <MealSwatch key={meal.id} meal={meal} />
    )}
  </div>
)

export default PalettePresenter
