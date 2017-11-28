import React from 'react'
import { Col, Thumbnail, Image, Button } from 'react-bootstrap'
import { BuyNowContainer } from '../containers'

const imgStyle = {
  width: '100%',
  height: '100%'
}

const MealCard = ({ meal }) => (
  <div className="col-xs-3 thumbnail">
    <img style={imgStyle} src={meal.image} />
    <div className="caption">
      <h5>
        <span>{meal.name}</span>
      </h5>
      <small>{`$${(+meal.basePrice / 100).toFixed(2)} - $${(+meal.inStorePrice / 100).toFixed(2)}`}</small>
      <BuyNowContainer
        meal={meal}
      />
    </div>
  </div>
)


// const MealCard = ({ meal }) => (
//   <Col xs={6} md={4} color="grey">
//   <Image src={meal.image} width="242" height="200" rounded />
//     <h3>{meal.name}</h3>
//     <p>{ `$${+meal.basePrice / 100}` }</p>
//     <p>
//       <Button bsStyle="primary">Buy Now</Button>&nbsp;
//       <Button bsStyle="default">Button</Button>
//     </p>
//   </Col>
// )

export default MealCard
