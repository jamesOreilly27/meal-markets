import React from 'react'
import { NavLink } from 'react-router-dom'

const RedeeemMealPresenter = ({ redeemableMeals }) => (
  <div>
    Redeem Me
    {redeemableMeals &&
      redeemableMeals.map(meal => (
        <NavLink
          key={meal.id}
          to={'/redeem'}
          > {meal.name}
        </NavLink>
      ))
    }
  </div>
)

export default RedeeemMealPresenter
