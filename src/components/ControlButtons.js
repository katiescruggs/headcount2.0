import React from 'react';
import '../styles/ControlButtons.css';

const DatasetSelect = ( {dataSet} ) => {
  return (
    <option value={dataSet}>
      {dataSet}
    </option>
  );
};

const ControlButtons = ({buttonNames, changeDataSet, currentDataFile}) => {
  const selectOptions = buttonNames.map( (fileName) => {
    return (
      <DatasetSelect
        key={fileName}
        dataSet={fileName} />
    );
  });
  
  return (
    <div className="control-button-container">
      <select
        value={currentDataFile}
        onChange={(e) => changeDataSet(e.target.value)}>

        <option value=''>Select a Dataset</option>
        {selectOptions}
      </select>
    </div>
  );
};

export default ControlButtons;