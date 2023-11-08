import './App.css';
import 'tachyons';
import React from 'react';
import Cards from "../Components/Cards.js";
import SearchBox from '../Components/SearchBox.js';
import { Component } from 'react';
import Scroll from '../Components/Scroll.js';

class App extends Component {
  constructor() {
    super() //we call the parent's constructor method and get access to the parent's properties and methods
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users })
      })
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
        <Scroll>
          <Cards robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
