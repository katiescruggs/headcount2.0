import React from 'react';
import { shallow } from 'enzyme';

import DataSetSelect from '../src/components/DataSetSelect';

describe('DataSetSelect', () => {
  it('has one select element and option elements', () => {
    const optionNames = ['one', 'two', 'three'];
    const currentDataFile = 'one';
    const mockChangeData = jest.fn();

    const wrapper = shallow(<DataSetSelect optionNames={optionNames} changeDataSet={mockChangeData} currentDataFile={currentDataFile}/>);

    expect(wrapper.find('select').length).toEqual(1);
    expect(wrapper.find('option').length).toEqual(3);
  });

  it('has options that are dependent on prop array', () => {
    const optionNames = ['one', 'two', 'three', 'four', 'five'];
    const currentDataFile = 'one';
    const mockChangeData = jest.fn();
    const wrapper = shallow(<DataSetSelect optionNames={optionNames} changeDataSet={mockChangeData} currentDataFile={currentDataFile}/>);

    expect(wrapper.find('option').length).toEqual(5);
  });

  it('calls changeDataSet function when a new option is clicked', () => {
    const optionNames = ['one', 'two', 'three', 'four', 'five'];
    const currentDataFile = 'one';
    const mockChangeData = jest.fn();
    const wrapper = shallow(<DataSetSelect optionNames={optionNames} changeDataSet={mockChangeData} currentDataFile={currentDataFile}/>);

    expect(mockChangeData.mock.calls.length).toEqual(0);

    wrapper.find('select').simulate('change', {target: {value: 'abc'}});
    expect(mockChangeData.mock.calls.length).toEqual(1);
  });
});