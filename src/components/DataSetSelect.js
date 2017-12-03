import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DataSetSelect.css';

const DataSetSelect = ({optionNames, changeDataSet, currentDataFile}) => {
  const selectOptions = optionNames.map( (fileName) => {
    return (
      <option key={fileName} value={fileName}>
        {fileName} 
      </option>
    );
  });
  
  return (
    <div className="select-data">
      <p className="select-data-instructions">Select a data set</p>
      <select
        value={currentDataFile}
        onChange={(e) => changeDataSet(e.target.value)}>
        
        {selectOptions}
        
      </select>
    </div>
  );
};

export default DataSetSelect;

DataSetSelect.propTypes = {
  optionNames: PropTypes.array,
  changeDataSet: PropTypes.func,
  currentDataFile: PropTypes.string
}