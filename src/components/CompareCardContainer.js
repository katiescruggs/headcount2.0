import React from 'react';
import Card from './Card.js';

const CompareCardContainer = ({districtOne, districtTwo, handleClick, compareDistrictAverages}) => {
  
  if(districtOne !== '' && districtTwo !== '') {
  const comparison = compareDistrictAverages(districtOne.location, districtTwo.location);
  console.log(comparison);
  return (
    <div className="compare-card-container">
      <Card key={districtOne.location} 
            id={districtOne.location}
            districtName={districtOne.location}
            districtData={districtOne.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='remove-compare' />
      <div>
        Comparison Card here--should we make a new component?
        <p><span>{districtOne.location} average: </span>{comparison[districtOne.location]}</p>
        <p><span>{districtTwo.location} average: </span>{comparison[districtTwo.location]}</p>
        <p><span>Weird Comparison Number: </span>{comparison.compared}</p>
      </div>

      <Card key={districtTwo.location} 
            id={districtTwo.location}
            districtName={districtTwo.location}
            districtData={districtTwo.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='remove-compare' />
    </div>
  )
  } else {
    return null;
  }
}

export default CompareCardContainer;