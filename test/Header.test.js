import React from 'react';
import DataSetSelect from '../src/components/DataSetSelect.js';
import Header from '../src/components/Header.js'
import { shallow, mount } from 'enzyme';

describe ('Header', () => {
  let header;
  let expectedState ={
    dataFileNames: ['Full Day Kindergartners', 'High School Grad Rates', 'Student Enrollment'], 
    currentDataFile: 'Student Enrollment' 
  };
  const mockFunc = jest.fn()

  beforeEach(() => {
    header = mount(<Header
      dataFileNames={expectedState.dataFileNames}
      CurrentDataFile={expectedState.currentDataFile}
      changeDataSet = {mockFunc} />)

  });

  it ('has one select element', () => {
    expect(header.find('select').length).toEqual(1);
  });

  it('runs changeDataSet on change', () =>{
    header.find('select').simulate('change', {target: {value: 'High School Grad Rates'}})
    expect(mockFunc.mock.calls.length).toEqual(1);
  })




})
