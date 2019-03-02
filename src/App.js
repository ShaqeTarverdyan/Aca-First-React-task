import React, { Component } from 'react';
import Header from './Header';
import LeftSide from './LeftSide';
import CenterSide from './CenterSide';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
       <Header /> 
       <LeftSide /> 
       <CenterSide />
      </div>
 
    );
  }
}

export default App;
