import React from 'react';
import Card from './Card.js'

const CardContainer = ({districtArray}) => (
  <div className="cardContainer">
    <div>
      {districtArray.map((district) => {
        return (
          <Card 
            key={district.location}
            districtName={district.location}  
            districtData={district.data} />
        )
      }
      )}
      <Card />
    </div>
  </div>

)

export default CardContainer