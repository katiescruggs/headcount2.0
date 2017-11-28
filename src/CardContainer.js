import React from 'react';
import Card from './Card.js'

const CardContainer = ({districtArray}) => (
  <div className = "cardContainer">
    <div>
      <p> Card container connected </p>
      <Card />
    </div>
  </div>

)

export default CardContainer