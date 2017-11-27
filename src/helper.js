export default class DistrictRepository {
  constructor (dirtyData) {
    this.data = this.dataClean(dirtyData);
  }

  dataClean(dirtyData) {
    let cleanData = {};

    cleanData = dirtyData.reduce((dataObject, item) => {
      const currentDistrict = item.Location.toUpperCase();

      if(!dataObject[currentDistrict]) {
        dataObject[currentDistrict] = {};
      }
      dataObject[currentDistrict][item.TimeFrame] = item;
       if (typeof dataObject[currentDistrict][item.TimeFrame].Data !== 'number') {
        dataObject[currentDistrict][item.TimeFrame].Data = 0;
      }
      return dataObject;
    }, {})
  return cleanData;
  }


}
