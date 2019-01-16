import React, { Component } from 'react';

import ChartsMainWrapper from '../containers/chartsMainWrapper.cont';
import SearchBar from '../containers/searchBar.cont';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<h1>Start searching to world's weather info</h1>
      	<SearchBar />
      	<ChartsMainWrapper />
      </div>
    );
  }
}
