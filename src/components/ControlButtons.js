import React from 'react';
import '../styles/ControlButtons.css';

const ControlButtons = ({buttonNames, changeDataSet, currentDataFile}) => {
  const buttons = buttonNames.map( (buttonName, index) => {
    let className = 'control-button';

    if (buttonName === currentDataFile) {
      className += ' active';
    }

    return (
      <button key={`control-button-${index}`} 
              className={className}
              onClick={() => {changeDataSet(buttonName)}}>
        {buttonName}
      </button>
    )
  });
  
  return (
    <div className="control-button-container">
      {buttons}
    </div>
  )
}

export default ControlButtons;