import React, { Component } from 'react';
import '../styles/App.css';
import DistrictRepository from './helper';
import CardContainer from './CardContainer.js';
import Search from './Search.js';
import CompareCardContainer from './CompareCardContainer.js';
import Header from './Header.js';

const dataFiles = {
  'Full Day Kindergarteners': require('../../data/kindergartners_in_full_day_program.js'),
  'High School Grad Rates': require('../../data/high_school_graduation_rates.js'),
  'Student Enrollment': require('../../data/pupil_enrollment.js'),
  'Online Student Enrollment': require('../../data/online_pupil_enrollment.js'),
  'Median Household Income': require('../../data/median_household_income.js'),
  'Children in Poverty': require('../../data/school_aged_children_in_poverty.js'),
  'Title I Students': require('../../data/title_i_students.js'),
  'Remediation in Higher Ed': require('../../data/remediation_in_higher_education.js')
};

class App extends Component {
  constructor () {
    super();
    this.state = {
      dataFileNames: Object.keys(dataFiles),
      currentDataFile: Object.keys(dataFiles)[0],
      districtData: 
      new DistrictRepository(dataFiles[Object.keys(dataFiles)[0]]),
      displayArray: [],
      compareSwitch: false,
      districtOne: '',
      districtTwo: '',
    };
    this.changeDataSet = this.changeDataSet.bind(this);
    this.filterDistricts = this.filterDistricts.bind(this);
    this.removeCompare = this.removeCompare.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ displayArray: this.state.districtData.findAllMatches() });
  }

  changeDataSet(dataFile) {
    const newDistrict = new DistrictRepository(dataFiles[dataFile]);

    const districtOne = newDistrict.findByName(this.state.districtOne.location) || '';
    const districtTwo = newDistrict.findByName(this.state.districtTwo.location) || '';

    this.setState(
      { currentDataFile: dataFile,
        districtData: newDistrict,
        displayArray: newDistrict.findAllMatches(),
        districtOne,
        districtTwo
      });
  }

  filterDistricts(searchTerm) {
    const filteredDistricts = this.state.districtData.findAllMatches(searchTerm);
    
    this.setState({displayArray: filteredDistricts});
  }

  removeCompare(districtToRemove, checkIfTwoExists) {
    if (checkIfTwoExists && this.state.districtTwo !== '') {
      this.setState({compareSwitch: true, districtOne: this.state.districtTwo, districtTwo: ''});
    } else {
      const compareBoolean = districtToRemove === 'districtTwo';
      
      this.setState({compareSwitch: compareBoolean, [districtToRemove]: ''});
    }
  }

  handleClick(districtName) {
    if (districtName === this.state.districtOne.location) {
      this.removeCompare('districtOne', true);
    } else if (districtName === this.state.districtTwo.location) {
      this.removeCompare('districtTwo');
    } else {
      const newComparisonCard = 
        this.state.districtData.findByName(districtName);
      
      const compareDistrict = this.state.compareSwitch ? 'districtTwo' : 'districtOne';
      
      this.setState({compareSwitch: !this.state.compareSwitch, 
        [compareDistrict]: newComparisonCard});
    }
  }
 
  render() {
    const {districtData, displayArray, districtOne,
      districtTwo, dataFileNames, currentDataFile} = this.state;
  
    return (
      <div className="App">
        <Header dataFileNames={dataFileNames} 
          changeDataSet={this.changeDataSet} 
          currentDataFile={currentDataFile} />

        <Search filterDistricts={this.filterDistricts}/>

        <h2 className="data-subheader">{currentDataFile}</h2>

        <CompareCardContainer 
          districtOne={districtOne} 
          districtTwo={districtTwo} 
          handleClick={this.handleClick}
          compareDistrictAverages={districtData.compareDistrictAverages}/>
        
        { this.state.displayArray.length > 0 &&
          <CardContainer 
            districtArray={displayArray}
            districtOne={districtOne}
            districtTwo={districtTwo}
            handleClick={this.handleClick} />      
        }
        
        { this.state.displayArray.length === 0 &&
          <div className="no-results">
            <p>No school districts found. Please try another search.</p>
          </div>
        }
      </div>
    );
  } 
}

export default App;