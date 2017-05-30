import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
const deals = require('./../../public/deals.json').deals;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter setFilter={(filterOptions) => {}} />, div);
});
