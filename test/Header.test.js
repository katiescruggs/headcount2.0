import React from 'react';
import DataSetSelect from '../src/components/DataSetSelect.js';
import Header from '../src/components/Header.js'
import { shallow, mount } from 'enzyme';

describe ('Header', () => {
  it ('has one select element', () => {
     const expectedState = {
      dataFileNames: ['Full Day Kindergartners', 'High School Grad Rates', 'Student Enrollment'], 
      currentDataFile: 'Student Enrollment'            
    };
    const mockFunc = jest.fn()

    const select = mount(<Header
      dataFileNames={expectedState.dataFileNames}
      currentDataFile={expectedState.currentDataFile}
      changeDataSet = {mockFunc} />)
    expect(select.find('select').length).toEqual(1);
    console.log(select.debug())
  })

  


})
