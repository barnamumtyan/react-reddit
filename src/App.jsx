import React, { Component } from 'react';
import './App.css';
import {Header, Sidebar, Main} from './layout';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="layout__body">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
