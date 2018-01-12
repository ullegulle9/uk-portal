import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="flexCenter">
        <div className="App">
          <header className="App-header">
            <div className="title">
              <span className="titleOne">Republic IT </span>
              <span className="titleTwo">portal</span>
            </div>
          </header>
          <MainContent/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
