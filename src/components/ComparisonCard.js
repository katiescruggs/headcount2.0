import React from 'react';
import '../styles/ComparisonCard.css'

        // Comparison Card here--should we make a new component?
        // <p><span>{districtOne.location} average: </span>{comparison[districtOne.location]}</p>
        // <p><span>{districtTwo.location} average: </span>{comparison[districtTwo.location]}</p>
        // <p><span>Weird Comparison Number: </span>{comparison.compared}</p>


const ComparisonCard = ({districtOne, districtTwo, compareDistrictAverages}) => {

const comparison = compareDistrictAverages(districtOne, districtTwo);
console.log(comparison)
  return (
    <div className = "comparison-card">
    <p><span>{districtOne} average: </span>{comparison[districtOne]}</p>
     <p><span>{districtTwo} average: </span>{comparison[districtTwo]}</p>
     
    </div>
  )
}

export default ComparisonCard; 