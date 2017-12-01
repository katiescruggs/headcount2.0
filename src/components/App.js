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
      cardActive: false,
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

checkRemove = (districtName) =>{
  console.log('remove button works')
  if (this.state.comparisonCards.length > 1 ) {
    if (this.state.comparisonCards[0].location === districtName ||
          this.state.comparisonCards[1].location === districtName ) {
        const newComparisonCards = this.state.comparisonCards.filter((district) =>{
          return district.location !== districtName
        });

           this.setState({comparisonCards: newComparisonCards})

    } 
  }
}
    handleClick = (districtName) =>{
      const newComparisonCard = this.state.districtData.findByName(districtName)
      this.setState({districtOne: newComparisonCard})
      console.log('handle click works')
      console.log(this.state)
    }

  //   setComparePosition (district) {
  //   const pos = this.state.compareCard ? 'firstDistrict' : 'secondDistrict';
  //   this.setState({
  //     [pos]: district,
  //     compareCard: !this.state.compareCard
  //   });
  // }



  // handleClick = (districtName) => {

  //       const newComparisonCard = this.state.districtData.findByName(districtName);
  //       const newComparisonCards = this.state.comparisonCards.length < 2 ? [...this.state.comparisonCards, newComparisonCard] : [...this.state.comparisonCards];
  //       this.setState({comparisonCards: newComparisonCards}, () => console.log(this.state.comparisonCards))
  //   if (this.state.comparisonCards.length > 0) {
  //     this.checkRemove(districtName)

  //   }
  // } 
  

  render() {
    return (
      <div className="App">
      <div className="main-hed">
        <h1>Headcount 2.0</h1>
      </div> 
        <Search filterDistricts={this.filterDistricts}/>
        
        { this.state.displayArray.length > 0 &&
          <CardContainer districtArray={this.state.displayArray}
                         comparisonCards={this.state.comparisonCards}  
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