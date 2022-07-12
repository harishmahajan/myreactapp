import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greeet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

export default App;
