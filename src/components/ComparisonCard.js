import React from 'react';
import '../styles/ComparisonCard.css';

const ComparisonCard = (
  { districtOne, 
    districtTwo, 
    compareDistrictAverages}) => {

  const comparison = compareDistrictAverages(districtOne, districtTwo);

  return (
    <div className="comparison-card">
      <div className="comparison-card-head">
        <h2> Averages </h2> 
      </div> 
      <p><strong>{districtOne} AVERAGE:</strong></p>
      <p><span className="big-number district1-avg"> {comparison[districtOne]} </span></p>
      <p><strong>{districtTwo} AVERAGE: </strong></p>
      <p> <span className="big-number district2-avg"> {comparison[districtTwo]} </span></p>
      <p><strong>COMPARISON RATIO:</strong></p>
      <p><span className="big-number comparison"> {comparison.compared} </span> </p>
    </div>
  );
};

export default ComparisonCard; 