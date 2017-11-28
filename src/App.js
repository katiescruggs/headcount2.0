import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer.js'

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



  render() {
  if(this.state.displayArray.length > 100) {
    return (
      <div className="App">
      <div>Welcome To Headcount 2.0</div>
      <CardContainer
      districtArray={this.state.displayArray} />
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