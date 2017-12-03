import React from 'react';
import DataSetSelect from '../src/components/DataSetSelect.js';
import Header from '../src/components/Header.js'
import { shallow } from 'enzyme';

describe ('Header', () => {
  it ('has one select element', () => {
    const select = shallow(<Header />)
    expect(select.find('select').length).toEqual(1);
    console.log(select.debug())
  })


})
