import React from 'react';


const ControlButtons = ({buttonNames, changeDataSet}) => {
  const buttons = buttonNames.map( (buttonName, index) => {
    return (
      <button key={`control-button-${index}`} 
              className="control-button" 
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