import React from 'react'

const Order = props => {
  const filterMeals = (orderId, meals) => {
    let foundMeal = {}
     meals.forEach(meal => {
       if (meal.id === orderId) foundMeal = meal
     })
     return foundMeal
  }

  return (
    <div>
      {props.meals &&
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '.5em'}}>
            {filterMeals(props.order.id, props.meals).name}
          </div>
          <div>
            {`order# ${props.order.id}`}
          </div>
        </div>
      }
    </div>
  )
}

export default Order
