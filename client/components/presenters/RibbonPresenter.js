import React from 'react'
import MealCard from './MealCardPresenter'
import Blurb from './BlurbPresenter'
import { Row } from 'react-bootstrap'

const Ribbon = ({ meals, blurb }) => (
  <Row>
    <Blurb blurb={blurb} />
    <Row>
      { meals.map(meal =>
        <MealCard key={meal.id} meal={meal} />
      )}
    </Row>
    <br />
  </Row>
)

export default Ribbon
