import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import '../styles/CardContainer.css'

const CardContainer = ({districtArray}) => (
  <div className="card-container">
    <div className="card-holder">
      { districtArray.map((district) => {
          return (
            <Card 
              key={district.location}
              districtName={district.location}  
              districtData={district.data} />
          )
      })
      }
      <Card />
    </div>
  </div>

)

export default CardContainer;

CardContainer.propTypes = {
  districtArray: PropTypes.array
};