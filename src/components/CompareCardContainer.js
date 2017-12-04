import React from 'react';
import Card from './Card.js';
import ComparisonCard from './ComparisonCard.js';
import PropTypes from 'prop-types';
import '../styles/CompareContainer.css';

function displayCard(district, handleClick) {
  return (
    <Card key={district.location}
      id={district.location}
      districtName={district.location}
      districtData={district.data}
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

  const districtOneCard = districtOne !== '' ? displayCard(districtOne, handleClick) : null;
  const districtTwoCard = districtTwo !== '' ? displayCard(districtTwo, handleClick) : null;

  const comparisonCard = (districtOne !== '' && districtTwo !== '') ?
    <ComparisonCard 
      districtOne={districtOne.location}
      districtTwo={districtTwo.location}
      compareDistrictAverages={compareDistrictAverages} />
    : null;

  return (
    <div className="compare-card-container">
      <div className="compare-card-holder">
        {districtOneCard}
        {comparisonCard}
        {districtTwoCard}
      </div>
    </div>
  );
};

export default CompareCardContainer;

CompareCardContainer.propTypes = {
  districtOne: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  districtTwo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleClick: PropTypes.func,
  compareDistrictAverages: PropTypes.func
};