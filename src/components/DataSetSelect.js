import React from 'react';
import '../styles/ControlButtons.css';

const DataSetSelect = ({optionNames, changeDataSet, currentDataFile}) => {
  const selectOptions = optionNames.map( (fileName) => {
    return (
      <option key={fileName} value={fileName}>
        {fileName} 
      </option>
    );
  });
  
  return (
    <div className="control-button-container">
      <select
        value={currentDataFile}
        onChange={(e) => changeDataSet(e.target.value)}>
        {selectOptions}
      </select>
    </div>
  );
};

export default DataSetSelect;