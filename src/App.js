import React, { Component } from 'react';
import TopCompany from './component/TopCompany';
import HotJob from './component/HotJob';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TopCompany />
        <HotJob column={4} row={2} />
        <HotJob column={4} row={4} />
        <HotJob column={3} row={3} />
        <HotJob column={1} row={3} />
        <HotJob column={5} row={1} />
      </div>
    );
  }
}

export default App;
