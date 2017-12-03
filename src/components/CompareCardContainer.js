import React from 'react';
import Card from './Card.js';
import ComparisonCard from './ComparisonCard.js';
import PropTypes from 'prop-types';
import '../styles/CompareContainer.css';

function displayCard(district, handleClick) {
  return (
    <Card key={[district].location}
      id={[district].location}
      districtName={[district].location}
      districtData={[district].data}
      handleClick={handleClick}
      type="card-clicked"
      buttonText="REMOVE" />
  );
}

const CompareCardContainer = (
  { districtOne, 
    districtTwo, 
    handleClick, 
    compareDistrictAverages}) => {

  if (districtOne !== '' && districtTwo !== '') {
    return (
      <div className="compare-card-container">
        <div className="compare-card-holder">
          <Card key={districtOne.location} 
            id={districtOne.location}
            districtName={districtOne.location}
            districtData={districtOne.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='REMOVE' />

          <ComparisonCard 
            districtOne={districtOne.location}
            districtTwo={districtTwo.location}
            compareDistrictAverages={compareDistrictAverages} />

          <Card key={districtTwo.location} 
            id={districtTwo.location}
            districtName={districtTwo.location}
            districtData={districtTwo.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='REMOVE' />
        </div>
      </div>
    );
  } else if (districtOne !== '') {
    return (
      <div className="compare-card-container">
        <div className="compare-card-holder">
          
          { displayCard(districtOne, handleClick) }

        </div>
        }
      </div>
    );
  } else if (districtTwo !== '') {
    return (
      <div className="compare-card-container">
        <div className="compare-card-holder">
          <Card key={districtTwo.location} 
            id={districtTwo.location}
            districtName={districtTwo.location}
            districtData={districtTwo.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='REMOVE' />
        </div>
      </div>
    );
  } else {
    return null;
  }  
};

export default CompareCardContainer;

CompareCardContainer.propTypes = {
  districtOne: PropTypes.string,
  districtTwo: PropTypes.string,
  handleClick: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};