import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    handle() {
        this.props.setFilter({
            broadband: document.getElementById('bb').checked,
            tv: document.getElementById('tv').checked,
            mobile: document.getElementById('ph').checked,
            speed: document.getElementById('speed').value
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
          <select id="speed" onChange={this.handle.bind(this)}>
              <option value="-1">Any</option>
              <option value="53248">52MB</option>
              <option value="5242880">5GB</option>
          </select>
      </div>
    );
  }
}

export default Filter;
