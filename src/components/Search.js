import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';

function Search(props) {
  const handleInputChange = (e) => {
    props.filterDistricts(e.target.value);
  };

  return (
    <div className = "input-container">
      <input 
        className="search-input" 
        placeholder="Search for a school district."
        onChange={(e) => handleInputChange(e)} />
    </div>
  );
}

export default Search;

Search.propTypes = {
  filterDistricts: PropTypes.func
};