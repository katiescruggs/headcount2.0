import React, { Component } from 'react';
import '../styles/App.css';
import DistrictRepository from './helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer.js';
import Search from './Search.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      districtData: new DistrictRepository(kinderData),
      displayArray: [],
      comparisonCards: []
    };
  }

  componentDidMount() {
    this.setState({ displayArray: this.state.districtData.findAllMatches() });
  }

  filterDistricts = (searchTerm) => {
    const filteredDistricts = this.state.districtData.findAllMatches(searchTerm);
    this.setState({displayArray: filteredDistricts})
  }

 // const newIdeas = this.state.ideas.filter(idea => idea.id !== id)
 //    this.setState({ideas: newIdeas})
 //  }

  handleClick = (id) => {
    const newComparisonCard = this.state.districtData.findByName(id);
    const newComparisonCards = this.state.comparisonCards < 2 ? [...this.state.comparisonCards, newComparisonCard] : [newComparisonCard];
  

    this.setState({comparisonCards: newComparisonCards}, () => console.log(this.state.comparisonCards))
  }

  render() {
    return (
      <div className="App">
      <div className="main-hed">
        <h1>Headcount 2.0</h1>
      </div> 
        <Search filterDistricts={this.filterDistricts}/>
        
        { this.state.displayArray.length > 0 &&
          <CardContainer districtArray={this.state.displayArray}
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