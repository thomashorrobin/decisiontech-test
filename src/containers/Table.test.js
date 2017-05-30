import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
const deals = require('./../../public/deals.json').deals;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table deals={deals} />, div);
});
