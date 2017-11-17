import React from 'react'

const MealCard = ({ meal }) => (
  <div>
    <img src={meal.image} />
    <div>
      <text>{meal.name}</text>
      <text>{meal.basePrice}</text>
    </div>
  </div>
)

export default MealCard
