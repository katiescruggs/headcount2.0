import React from 'react'
import { shallow } from 'enzyme'
import Card from '../src/components/Card.js'

describe ('Card Tests', () => {
  it('has a card class name, an h2, an ul, and a button', () => {
    const district = {location: 'Academy 20', data: {2014: 1, 2015: 1} }
    const mockHandleClick = jest.fn()
    const wrapper = shallow ( <Card 
            key={district.location}
            id={district.location}
            districtName={district.location}
            districtData={district.data}
            handleClick = {mockHandleClick}
            type= ''
            buttonText='Compare' /> );
    expect(wrapper.hasClass('card')).toEqual(true);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should display li elements based on how much data is passed in', () => {
    const mockHandleClick = jest.fn()
    const district1 = {location: 'Academy 20', data: {2014: 1, 2015: 1} }
    const wrapper1 = shallow ( <Card 
            key={district1.location}
            id={district1.location}
            districtName={district1.location}
            districtData={district1.data}
            handleClick = {mockHandleClick}
            type= ''
            buttonText='Compare' /> );

    const district2 = {location: 'Colorado', data: {2014: 0.3, 2015: 1, 2016: 0.6} }
    const wrapper2 = shallow ( <Card 
            key={district2.location}
            id={district2.location}
            districtName={district2.location}
            districtData={district2.data}
            handleClick = {mockHandleClick}
            type= ''
            buttonText='Compare' /> );

    expect(wrapper1.find('li').length).toEqual(2);
    expect(wrapper2.find('li').length).toEqual(3);
  });

  it('should render a checkmark next to the data if the value is greater than 0.5', () =>{
    const district = {location: 'Colorado', data: {2014: 0.3, 2015: 1, 2016: 0.6} }
    const mockHandleClick = jest.fn()
    const wrapper = shallow ( <Card 
            key={district.location}
            id={district.location}
            districtName={district.location}
            districtData={district.data}
            handleClick = {mockHandleClick}
            type= ''
            buttonText='Compare' /> );
    expect(wrapper.find('FaCheck').length).toEqual(2);
  });

  it('should call the handleClick function if the compare button is clicked', () => {
    const district = {location: 'Colorado', data: {2014: 0.3, 2015: 1, 2016: 0.6} }
    const mockHandleClick = jest.fn()
    const wrapper = shallow ( <Card 
            key={district.location}
            id={district.location}
            districtName={district.location}
            districtData={district.data}
            handleClick = {mockHandleClick}
            type= ''
            buttonText='Compare' /> );

    expect(mockHandleClick.mock.calls.length).toEqual(0);

    wrapper.find('button').simulate('click');
    expect(mockHandleClick.mock.calls.length).toEqual(1);
  });
});