import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import Sidemenu from './layout/Sidebar';
import Main from './layout/Main';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="layout__body">
          <Sidemenu />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
