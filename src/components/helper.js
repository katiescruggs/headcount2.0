export default class DistrictRepository {
  constructor (districtData) {
    this.data = this.data(districtData);
    this.findByName = this.findByName.bind(this);
    this.findAllMatches = this.findAllMatches.bind(this);
    this.findAverage = this.findAverage.bind(this);
    this.compareDistrictAverages = this.compareDistrictAverages.bind(this);
  }

  roundTo1000(number) {
    return Math.round(number * 1000)/1000;
  }

  data(dirtyData) {
    let cleanData = {};

    cleanData = dirtyData.reduce((dataObject, item) => {
      let currentDistrict = item.Location.toUpperCase();

      if(!dataObject[currentDistrict]) {
        dataObject[currentDistrict] = {};
      }

      let data = item.DataFormat === 'Percent' ? this.roundTo1000(item.Data) : item.Data;

      dataObject[currentDistrict][item.TimeFrame] = data;
       if (isNaN(dataObject[currentDistrict][item.TimeFrame])) {
        dataObject[currentDistrict][item.TimeFrame] = 0;
      }
      return dataObject;
    }, {});

    return cleanData;
  }

  findByName(searchValue) {
    if (!searchValue) {
      return undefined
    } 
    searchValue = searchValue.toUpperCase();
    if (this.data[searchValue]) {
      return {location: searchValue, data: this.data[searchValue]}
    }
  }

  findAllMatches(searchValue) {
    if(!searchValue) {
      let allData = Object.keys(this.data).map(key => {
        return {
          location: key,
          data: this.data[key]
        }
      });
      return allData;
    }
    searchValue = searchValue.toUpperCase();
    let matchKeys = Object.keys(this.data).filter(key => key.includes(searchValue));
    let matches = matchKeys.map(matchKey => {
      return {
        location: matchKey, 
        data: this.data[matchKey]
      }
    });
    return matches;
  }

  findAverage(districtName) {
    let district = this.findByName(districtName);
   
    let dataYears = Object.keys(district.data);

    let sum = dataYears.reduce( (sum, dataYear) => {
      sum += district.data[dataYear];
      return sum;
    }, 0);

    let average = this.roundTo1000(sum / dataYears.length);

    return average;
  }

  compareDistrictAverages(districtOne, districtTwo) {
    let averageOne = this.findAverage(districtOne);
    let averageTwo = this.findAverage(districtTwo);
    let compared = this.roundTo1000(averageOne / averageTwo);

    return { [districtOne.toUpperCase()]: averageOne, 
             [districtTwo.toUpperCase()]: averageTwo,
             compared };
  }
}
