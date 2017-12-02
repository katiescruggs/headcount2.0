import React from 'react'
import { shallow } from 'enzyme'
import Card from '../src/components/Card.js'

describe ('Card Tests', () => {
    it('has a card class name an h2 and a button', () => {
    const district = {location: 'Academy 20', data: {2014: 1, 2015: 1} }
    const mockFunc = jest.fn()
    const wrapper = shallow ( <Card 
            key={district.location}
            id={district.location}
            districtName={district.location}
            districtData={district.data}
            handleClick = {mockFunc}
            type= ''
            buttonText='Compare' /> );
      expect(wrapper.find('.card').length).toEqual(1);
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('h2').length).toEqual(1);
  });

    it('should render a checkmark next to the data if the value is greater than 0.5', () =>{
       const district = {location: 'Colorado', data: {2014: 0.3, 2015: 1, 2016: 0.6} }
       const mockFunc = jest.fn()
        const wrapper = shallow ( <Card 
            key={district.location}
            id={district.location}
            districtName={district.location}
            districtData={district.data}
            handleClick = {mockFunc}
            type= ''
            buttonText='Compare' /> );
      expect(wrapper.find('FaCheck').length).toEqual(2);
    })


})