import 'tachyons';
import React from 'react';
import Cards from "./Cards";
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super() //we call the parent's constructor method and get access to the parent's properties and methods
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => { // using an arrow function to have an app's context instead of searchbox's one
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cards robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
