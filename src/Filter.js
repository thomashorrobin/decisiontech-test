import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    handle() {
        this.props.setFilter({
            broadband: document.getElementById('bb').checked,
            tv: document.getElementById('tv').checked,
            mobile: document.getElementById('ph').checked
        });
    }
  render() {
    return (
      <div className="filter-body">
          <ul>
              <li><input id="bb" type="checkbox" onChange={this.handle.bind(this)} />Broadband</li>
              <li><input id="tv" type="checkbox" onChange={this.handle.bind(this)} />TV</li>
              <li><input id="ph" type="checkbox" onChange={this.handle.bind(this)} />Mobile</li>
          </ul>
      </div>
    );
  }
}

export default Filter;
