import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';

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
    });
  }



  render() {
    { console.log(this.state.districtData) }
    return (
      <div className = "App">
      <div>Welcome To Headcount 2.0</div>
    
      </div>
    );
  }
}

export default App;