import React from 'react';
import PropTypes from 'prop-types';

function displayData(districtData) {
  if (districtData !== undefined) {
  const years = Object.keys(districtData);
    return years.map((year, index) => {
        return (
          <li key={index}>{year}: {districtData[year]}</li>
        )
      })
  } else {
    return null;
  }
}

const Card = ({districtName, districtData}) => (
  <div className="card">
    <div className="card-head">
      <h2>{districtName}</h2>
    </div>
    <ul className="card-data">
      {displayData(districtData)}
    </ul>
  </div>
)

export default Card;

Card.propTypes = {
  districtName: PropTypes.string,
  districtData: PropTypes.object
}