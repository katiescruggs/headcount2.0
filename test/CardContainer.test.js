import React from 'react'
import { shallow, mount} from 'enzyme'
import CardContainer from '../src/components/CardContainer.js'

describe ('Card Container Tests', () => {
  it('holds three cards when there are three datasets in the display array', () => {
   const expectedState = {
      displayArray: [{location: 'Academy 20', data: {2014: 1, 2015: 1} }, 
                     {location: 'Colorado', data: {2014: 0.3, 2015: 0.8} },
                     {location: 'Colorado Springs 11', data: {2014: 0.4, 2015: 0.9} }],
      districtOne: {location: 'Harrison 2', data: {2014: 1, 2015: 1} },
      districtTwo: {location: 'Widefield 3', data: {2014: 0.3, 2015: 0.8} }
    };
    const mockFunc = jest.fn()
    const wrapper = mount ( <CardContainer 
            districtArray={expectedState.displayArray}
            districtOne = {expectedState.districtOne}
            districtTwo = {expectedState.districtTwo}
            handleClick = {mockFunc} /> );
      expect(wrapper.find('.card').length).toEqual(3);
  });

    it('renders a card with the card-clicked class if a display array location equals the location of district one or district two', () => {
   const expectedState = {
      displayArray: [{location: 'Academy 20', data: {2014: 1, 2015: 1} }, 
                     {location: 'Colorado', data: {2014: 0.3, 2015: 0.8} },
                     {location: 'Colorado Springs 11', data: {2014: 0.4, 2015: 0.9} }],
      districtOne: {location: 'Academy 20', data: {2014: 1, 2015: 1} },
      districtTwo: {location: 'Widefield 3', data: {2014: 0.3, 2015: 0.8} }
    };
    const mockFunc = jest.fn()
    const wrapper = mount ( <CardContainer 
            districtArray={expectedState.displayArray}
            districtOne = {expectedState.districtOne}
            districtTwo = {expectedState.districtTwo}
            handleClick = {mockFunc} /> );
      expect(wrapper.find('.card-clicked').length).toEqual(1);
  });


});  

