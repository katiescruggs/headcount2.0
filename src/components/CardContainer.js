import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import '../styles/CardContainer.css';

const CardContainer = ( 
  { districtArray, 
    districtOne, 
    districtTwo, 
    handleClick
  }) => {
  return (
    <div className="card-container">
      <div className="card-holder">
        { districtArray.map((district) => {
           
          let type = '';
          let buttonText = 'COMPARE';

          if (district.location === districtOne.location 
            || district.location === districtTwo.location) {
            type = 'card-clicked';
            buttonText = 'REMOVE';
          }

          return (
            <Card 
              key={district.location}
              id={district.location}
              districtName={district.location}  
              districtData={district.data}
              handleClick={handleClick}
              type={type}
              buttonText={buttonText} />
          );
        })
        }
      </div>
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  districtArray: PropTypes.array,
  districtOne: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  districtTwo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleClick: PropTypes.func
};