import React, { Component } from 'react';
import './App.css';
import Table from './containers/Table'
import FilterUI from './components/Filter'
import filter from './lib/Filter'
import FilterOptions from './lib/FilterOptions'
import burgermenu from './burgermenu.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      deals: [],
      filterOptions: new FilterOptions()
    }
    fetch('deals.json').then(response => response.json()).then(json => this.setState({ deals: json.deals }));
  }
  setFilter (filterOptions) {
    this.setState({filterOptions});
  }
  showFilterMenu() {
    let filterBody = document.getElementsByClassName('filter-body')[0];
    let visible = filterBody.style.visibility;
    if (visible == "visible") {
      filterBody.style.visibility = "hidden";
    } else {
      filterBody.style.visibility = "visible";
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="broadbandchoices" src="data:image/png;base64,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" className="App-logo" />
          <img onClick={this.showFilterMenu.bind()} className="burgermenu" src={burgermenu} alt="not avalible" />
        </div>
        <div className="App-body">
          <FilterUI setFilter={this.setFilter.bind(this)} />
          <Table deals={filter(this.state.deals, this.state.filterOptions)} />
        </div>
      </div>
    );
  }
}

export default App;
