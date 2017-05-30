import React, { Component } from 'react';
import './Filter.css';
import FilterOptions from './../lib/FilterOptions'

class Filter extends Component {
    handleChange() {
        let broadband = document.getElementById('bb').checked;
        let tv = document.getElementById('tv').checked;
        let mobile = document.getElementById('ph').checked;
        let speed = parseInt(document.getElementById('speed').value);
        this.props.setFilter(new FilterOptions(broadband, tv, mobile, speed));
    }
    render() {
        return (
            <div className="filter-body">
                <ul>
                    <li><input id="bb" type="checkbox" onChange={this.handleChange.bind(this)} />Broadband</li>
                    <li><input id="tv" type="checkbox" onChange={this.handleChange.bind(this)} />TV</li>
                    <li><input id="ph" type="checkbox" onChange={this.handleChange.bind(this)} />Mobile</li>
                </ul>
                <select id="speed" onChange={this.handleChange.bind(this)}>
                    <option value="-1">Any</option>
                    <option value="53248">52MB</option>
                    <option value="5242880">5GB</option>
                </select>
            </div>
        );
    }
}

export default Filter;
