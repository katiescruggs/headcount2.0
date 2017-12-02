import React from 'react';
import App from './components/App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper = mount(<App />);

  it('should have default state properties', () => {
    expect(typeof wrapper.state().districtData).toEqual('object');
    expect(typeof wrapper.state().displayArray).toEqual('object');
    expect(wrapper.state().compareSwitch).toEqual(false);
    expect(wrapper.state().districtOne).toEqual('');
    expect(wrapper.state().districtTwo).toEqual('');
  });

  it('should have a default displayArray of 181 districts in state and 181 cards on the DOM', () => {
    expect(wrapper.state().displayArray.length).toEqual(181);
    expect(wrapper.find('.card').length).toEqual(181);
  });

  it('should filter cards based on user search input', () => {
    expect(wrapper.state().displayArray.length).toEqual(181);
    expect(wrapper.find('.card').length).toEqual(181);

    wrapper.find('input').simulate('change', {target: {value: 'yuma'}});

    expect(wrapper.state().displayArray.length).toEqual(3);
    expect(wrapper.find('.card').length).toEqual(3);
  });

  it('should render a nothing-found message if the search does not match any districts', () => {
    wrapper.find('input').simulate('change', {target: {value: 'xyz'}});

    expect(wrapper.state().displayArray.length).toEqual(0);
    expect(wrapper.find('.card').length).toEqual(0);
    expect(wrapper.find('.no-results').length).toEqual(1);
  });

  it('should add a card to the state and the top of the screen if a user selects it', () => {
    wrapper.find('input').simulate('change', {target: {value: ''}});

    wrapper.find('.COLORADO').first().find('.compare-button').simulate('click');
    expect(wrapper.state().districtOne.location).toEqual('COLORADO');

    expect(wrapper.find('.card-clicked').length).toEqual(2);

    wrapper.find('.ACADEMY').find('.compare-button').simulate('click');
    expect(wrapper.state().districtTwo.location).toEqual('ACADEMY 20');
    expect(wrapper.find('.card-clicked').length).toEqual(4);
  });

  it('should only let the user select 2 max cards to compare', () => {
    wrapper.find('.WIGGINS').first().find('.compare-button').simulate('click');
    expect(wrapper.state().districtOne.location).toEqual('WIGGINS RE-50(J)');
    expect(wrapper.find('.card-clicked').length).toEqual(4);
  });

  it('should remove a card from state and from the top of the screen if the user selects it again', () => {
    wrapper.find('.WIGGINS').first().find('.compare-button').simulate('click');
    expect(wrapper.state().districtOne.location).toEqual('ACADEMY 20');
    expect(wrapper.state().districtTwo).toEqual('');
    expect(wrapper.find('.card-clicked').length).toEqual(2);

    wrapper.find('.ACADEMY').first().find('.compare-button').simulate('click');
    expect(wrapper.state().districtOne).toEqual('');
    expect(wrapper.state().districtTwo).toEqual('');
    expect(wrapper.find('.card-clicked').length).toEqual(0);
  });
});
