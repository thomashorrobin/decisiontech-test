import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'

class App extends Component {
  constructor() {
    super();
    this.state = {
      deals: []
    }
    fetch('deals.json').then(response => response.json()).then(json => this.setState({ deals: json.deals }));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Table deals={this.state.deals} />
      </div>
    );
  }
}

export default App;
