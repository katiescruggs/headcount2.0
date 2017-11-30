import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import '../styles/CardContainer.css'

const CardContainer = ({districtArray, comparisonCards, handleClick}) => (
  <div className="card-container">
    <div className="card-holder">
      { districtArray.map((district) => {
         
          let type = '';
          let buttonText = 'compare';

          if(comparisonCards.length === 1) {
            if(district.location === comparisonCards[0].location) {
              type = 'card-clicked';
              buttonText = 'remove';
            }
          } else if(comparisonCards.length === 2) {
            if(district.location === comparisonCards[0].location || district.location === comparisonCards[1].location) {
              type = 'card-clicked';
              buttonText = 'remove';
            }
          }
          return (
            <Card 
              key={district.location}
              id={district.location}
              type={type}
              buttonText = {buttonText}
              districtName={district.location}  
              districtData={district.data}
              handleClick = {handleClick} />
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