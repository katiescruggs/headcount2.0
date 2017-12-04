import React from 'react'
import { shallow } from 'enzyme'
import Card from '../src/components/Card.js'
import toJson from 'enzyme-to-json'

describe ('Card Tests', () => {
  let wrapper;
  
  let mockHandleClick = jest.fn()
  let district = {location: 'Academy 20', data: {2014: 1, 2015: 0.3} }
  
  beforeEach(()=>{
    wrapper = shallow(<Card 
    key={district.location}
    id={district.location}
    districtName={district.location}
    districtData={district.data}
    handleClick = {mockHandleClick}
    type= ''
    buttonText='Compare' /> )
    });


  it('should match the snapshot', () =>{
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('has a card class name an h2 and a button', () => {
    expect(wrapper.find('.card').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  });
  

  it('should render a checkmark next to the data if the value is greater than 0.5', () =>{
    expect(wrapper.find('FaCheck').length).toEqual(1);
  });

  it('should call the handleClick function if the compare button is clicked', () => {
    expect(mockHandleClick.mock.calls.length).toEqual(0);

    wrapper.find('button').simulate('click');
    expect(mockHandleClick.mock.calls.length).toEqual(1);
  });
});