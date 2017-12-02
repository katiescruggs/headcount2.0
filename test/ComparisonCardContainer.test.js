import React from 'react';
import { shallow, mount } from 'enzyme';

import CompareCardContainer from '../src/components/CompareCardContainer.js';
import ComparisonCard from '../src/components/ComparisonCard.js';
import Card from '../src/components/Card.js';

const mockCompareAverages = (districtOne, districtTwo) => {
  return {[districtOne]: 'district one average', 
          [districtTwo]: 'district two average',
           compared: 'comparison ratio'  
        };
};
const mockHandleClick = jest.fn();

describe('CompareCardContainer', () => {
  it('should contain 2 cards and 1 comparison card if 2 cards are beings compared', () => {
    const mockDistrictOne = {location: 'COLORADO', data: {2004: 0.5}};
    const mockDistrictTwo = {location: 'ACADEMY 20', data: {2004: 0.8}};

    const wrapper = mount(<CompareCardContainer districtOne={mockDistrictOne} districtTwo={mockDistrictTwo} handleClick={mockHandleClick} compareDistrictAverages={mockCompareAverages} />);
    
    expect(wrapper.find('.comparison-card').length).toEqual(1);
    expect(wrapper.find('.card').length).toEqual(2);
  });

  it('should contain 1 card and 0 comparison card if only 1 card is selected to compare', () => {
    const mockDistrictOne = {location: 'COLORADO', data: {2004: 0.5}};
    const mockDistrictTwo = '';

    const wrapper = mount(<CompareCardContainer districtOne={mockDistrictOne} districtTwo={mockDistrictTwo} handleClick={mockHandleClick} compareDistrictAverages={mockCompareAverages} />);
    
    expect(wrapper.find('.comparison-card').length).toEqual(0);
    expect(wrapper.find('.card').length).toEqual(1);
  });

  it('should contain 0 cards and 0 comparison cards if no cards are selected to compare', () => {
    const mockDistrictOne = '';
    const mockDistrictTwo = '';

    const wrapper = mount(<CompareCardContainer districtOne={mockDistrictOne} districtTwo={mockDistrictTwo} handleClick={mockHandleClick} compareDistrictAverages={mockCompareAverages} />);
    
    expect(wrapper.find('.comparison-card').length).toEqual(0);
    expect(wrapper.find('.card').length).toEqual(0);
  });
});