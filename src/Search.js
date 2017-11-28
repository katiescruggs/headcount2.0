import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const handleInputChange = (e) => {
    props.filterDistricts(e.target.value);
  }

  return (
      <input className="search-input" 
             placeholder="Search for a school district."
             onChange={(e) => handleInputChange(e)} />
  )
}

export default Search;

Search.propTypes = {
  filterDistricts: PropTypes.func
}