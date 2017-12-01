import React from 'react';
import '../styles/ComparisonCard.css'

        // Comparison Card here--should we make a new component?
        // <p><span>{districtOne.location} average: </span>{comparison[districtOne.location]}</p>
        // <p><span>{districtTwo.location} average: </span>{comparison[districtTwo.location]}</p>
        // <p><span>Weird Comparison Number: </span>{comparison.compared}</p>


const ComparisonCard = ({districtOne, districtTwo, compareDistrictAverages}) => {

const comparison = compareDistrictAverages(districtOne, districtTwo);
console.log(comparison.compared)
  return (
    <div className = "comparison-card">
      <div className = "comparison-card-head">
        <h2> Averages </h2> 
      </div> 
    <p>{districtOne} average:</p>
    <p><span className = "big-number"> {comparison[districtOne]}</span></p>
     <p><span>{districtTwo} average: </span>{comparison[districtTwo]}</p>
     <p>Average of the two districts: {comparison.compared} </p>
    </div>
  )
}

export default ComparisonCard; 