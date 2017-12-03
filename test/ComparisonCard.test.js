import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonCard from '../src/components/ComparisonCard.js';
import toJson from 'enzyme-to-json'


describe('ComparisonCard', () => {
  let wrapper;
  let mockCompareAverages = (districtOne, districtTwo) => {
    return {[districtOne]: 'district one average', 
            [districtTwo]: 'district two average',
            compared: 'comparison ratio'  
    };
  };
  beforeEach(() =>{
    wrapper = shallow(<ComparisonCard districtOne='COLORADO' districtTwo='ACADEMY 20' compareDistrictAverages={mockCompareAverages}/>)
  });

  it('should match the snapshot', () =>{
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('should have one h2 and six p tags', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(6);
  });

  it('should display districtOne, districtTwo, and the comparison between them', () => {
    expect(wrapper.find('.district1-avg').text()).toEqual('district one average');
    expect(wrapper.find('.district2-avg').text()).toEqual('district two average');
    expect(wrapper.find('.comparison').text()).toEqual('comparison ratio');
  });
});