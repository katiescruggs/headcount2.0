import React from 'react';
import DataSetSelect from './DataSetSelect.js';
import ChildIcon from 'react-icons/lib/fa/child';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({dataFileNames, changeDataSet, currentDataFile}) => {
  return (
    <div className="main-hed">
      <div className="logo">
        <h1>
          <span className="top-icon"><ChildIcon /></span>
          Headcount
        </h1>
      </div>


      <DataSetSelect 
        optionNames={dataFileNames}
        changeDataSet={changeDataSet}
        currentDataFile={currentDataFile}/>
    </div>
  );
};

export default Header;

Header.propTypes = {
  dataFileNames: PropTypes.array,
  changeDataSet: PropTypes.func,
  currentDataFile: PropTypes.string
}