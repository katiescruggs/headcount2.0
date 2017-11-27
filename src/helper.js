export default class DistrictRepository {
  constructor (dirtyData) {
    this.data = this.data(dirtyData);
  }

  data(dirtyData) {
    let cleanData = {};

    cleanData = dirtyData.reduce((dataObject, item) => {
      let currentDistrict = item.Location.toUpperCase();

      if(!dataObject[currentDistrict]) {
        dataObject[currentDistrict] = {};
      }

      let data = item.DataFormat === 'Percent' ? Math.round(item.Data * 1000)/1000 : item.Data;

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

}
