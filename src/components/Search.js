import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';

function Search({filterDistricts}) {
  return (
    <div className="input-container">
      <input 
        className="search-input" 
        placeholder="Search for a school district"
        onChange={(e) => filterDistricts(e.target.value)} />
    </div>
  );
}

export default Search;

Search.propTypes = {
  filterDistricts: PropTypes.func
};