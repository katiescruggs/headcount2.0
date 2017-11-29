import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shallow, mount } from 'enzyme';

describe('App test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('can shallow', () => {
    const renderedApp = shallow(<App />);
    console.log(renderedApp.debug());
  });

});
