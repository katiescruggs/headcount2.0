import React, { Component } from 'react';
import '../styles/App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer.js';
import Search from './Search.js';
import CompareCardContainer from './CompareCardContainer.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      districtData: new DistrictRepository(kinderData),
      displayArray: [],
      compareSwitch: false,
      districtOne: '',
      districtTwo: '' 
    };
  }

  componentDidMount() {
    this.setState({ displayArray: this.state.districtData.findAllMatches() });
  }

  filterDistricts = (searchTerm) => {
    const filteredDistricts = this.state.districtData.findAllMatches(searchTerm);
    this.setState({displayArray: filteredDistricts})
  }

  removeCompare = (districtToRemove) => {
    const compareBoolean = districtToRemove === 'districtTwo';
    this.setState({compareSwitch: compareBoolean, [districtToRemove]: ''}, () => console.log(this.state));
  }

  handleClick = (districtName) => {
    if(districtName === this.state.districtOne.location) {
      this.removeCompare('districtOne');
    } else if(districtName === this.state.districtTwo.location) {
      this.removeCompare('districtTwo');
    } else {
      const newComparisonCard = this.state.districtData.findByName(districtName);
      const compareDistrict = this.state.compareSwitch ? 'districtTwo' : 'districtOne';
      this.setState({compareSwitch: !this.state.compareSwitch, [compareDistrict]: newComparisonCard}) 
    }
  }

 
  render() {
    const {districtData, displayArray, districtOne, districtTwo} = this.state;
    return (
      <div className="App">
      <div className="main-hed">
        <h1>Headcount 2.0</h1>
      </div> 
        <CompareCardContainer districtOne={districtOne} 
                              districtTwo={districtTwo} 
                              handleClick={this.handleClick}
                              compareDistrictAverages={districtData.compareDistrictAverages}/>
        <Search filterDistricts={this.filterDistricts}/>
        
        { this.state.displayArray.length > 0 &&
          <CardContainer districtArray={this.state.displayArray}
                         districtOne={this.state.districtOne}
                         districtTwo={this.state.districtTwo}
                         handleClick = {this.handleClick} />
                        
        }
        
        { this.state.displayArray.length === 0 &&
          <div className="no-results">
            <p>No school districts found...</p>
          </div>
        }
      </div>
    );
  } 
}

export default App;