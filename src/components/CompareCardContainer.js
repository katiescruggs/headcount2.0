import React from 'react';
import Card from './Card.js';
import ComparisonCard from './ComparisonCard.js'
import '../styles/CompareContainer.css'

const CompareCardContainer = ({districtOne, districtTwo, handleClick, compareDistrictAverages}) => {
  

  if(districtOne !== '' && districtTwo !== '') {

  return (
    <div className="compare-card-container">
      <div className = "compare-card-holder">
      <Card key={districtOne.location} 
            id={districtOne.location}
            districtName={districtOne.location}
            districtData={districtOne.data}
            handleClick={handleClick}
            type='card-clicked'
            buttonText='Remove Compare' />
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
            buttonText='Remove Compare' />
    </div>
    </div>
  )
  } else {
    return null;
  }
}

export default CompareCardContainer;