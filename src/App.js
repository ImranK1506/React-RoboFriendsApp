import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from "./robots";
import './App.css'

class App extends Component {
   constructor() {
      super()
      this.state = {
         robots: [],
         searchfield: ''
      }
      console.log('The Constructor is triggered at first');
   }

   onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
   };

   componentDidMount() {
      this.setState({ robots: robots })
      console.log('The componentDidMount is triggered as last');
   }

   render() {
      // filter per robot
      const filteredRobots = this.state.robots.filter(robot => {
         return robot.name
             .toLowerCase()
             .includes(
                 this.state.searchfield.toLowerCase()
             );
      });
      console.log('The Rendering happens next');
      return (
          <div className='tc'>
             <h1 className='f1'>RoboFriends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
             <CardList robots={filteredRobots} />
          </div>
      );
   }
}

export default App;
