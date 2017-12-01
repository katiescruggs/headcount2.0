import React from 'react';
import Card from './Card.js';
import ComparisonCard from './ComparisonCard.js'

const CompareCardContainer = ({districtOne, districtTwo, handleClick, compareDistrictAverages}) => {
  

  if(districtOne !== '' && districtTwo !== '') {
  // const comparison = compareDistrictAverages(districtOne.location, districtTwo.location);
  // console.log(comparison);
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
      <ComparisonCard 
        districtOne = {districtOne.location}
        districtTwo = {districtTwo.location}
        compareDistrictAverages = {compareDistrictAverages} />



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