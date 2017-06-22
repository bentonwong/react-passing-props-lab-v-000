import React from 'react';
import { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
     this.fetchFilters();
     this.fetchFruit();
   }

   fetchFilters() {
     fetch('/api/fruit_types')
       .then(response => response.json())
       .then(filters => this.setState({filters: filters}));
   }

   fetchFruit() {
     fetch('/api/fruit')
       .then(response => response.json())
       .then(fruit => this.setState({ fruit: fruit }));
   }

  updateFilter(event) {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }
}

export default App;
