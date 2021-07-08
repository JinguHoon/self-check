import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>Web</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Subject>
        
      </Subject>
    )
  }
}

export default App;
