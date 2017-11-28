import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer.js';
import Search from './Search.js';

class App extends Component {
  constructor () {
    super();
      this.state = {
      districtData: new DistrictRepository(kinderData),
      displayArray: []
    };
  }

  componentDidMount() {
    this.setState({
      displayArray: this.state.districtData.findAllMatches()
    }, () => console.log(this.state.displayArray) );
  }

  filterDistricts = (searchTerm) => {
    const filteredDistricts = this.state.districtData.findAllMatches(searchTerm);
    console.log(filteredDistricts);
    this.setState({displayArray: filteredDistricts})
  }

  render() {
  if(this.state.displayArray.length) {
    return (
      <div className="App">
        <h1>Welcome To Headcount 2.0</h1>
        <Search filterDistricts={this.filterDistricts}/>
        <CardContainer districtArray={this.state.displayArray} />
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    )
  }
  }
}

export default App;