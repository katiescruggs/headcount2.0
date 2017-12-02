import React from 'react';
import { shallow } from 'enzyme';

import Search from '../src/components/Search.js';

describe('Search', () => {
  it('has one input field', () => {
    const search = shallow(<Search />);

    expect(search.find('input').length).toEqual(1);
  });

  it('runs filterDistricts from props on change', () => {
    const mockFilterDistricts = jest.fn();
    const search = shallow(<Search filterDistricts={mockFilterDistricts} />);

    expect(mockFilterDistricts.mock.calls.length).toEqual(0);

    search.find('input').simulate('change', {target: {value: 'test'}});
    expect(mockFilterDistricts.mock.calls.length).toEqual(1);
  });
});