import './reset.css';
import './App.css';
import React, { Component } from 'react';
import Home from './components/home/home';
import Workouts from './components/workouts/workouts';
import Nutrition from './components/nutrition/nutrition';
import Trainers from './components/trainers/trainers';


class App extends Component {

  render() {
    return (
      <div className="App">
          <span>{Home}</span>
          <span>{Workouts}</span>
          <span>{Nutrition}</span>
          <span>{Trainers}</span>
      </div>
    );
  }
}

export default App;
