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

      let data = item.DataFormat === 'Percent' ? (item.Data * 100).toFixed(2) : item.Data;

      dataObject[currentDistrict][item.TimeFrame] = data;
       if (isNaN(dataObject[currentDistrict][item.TimeFrame])) {
        dataObject[currentDistrict][item.TimeFrame] = 'N/A';
      }
      return dataObject;
    }, {});

    return cleanData;
  }
}
