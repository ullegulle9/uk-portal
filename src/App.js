// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import Register from './Register/Register';
import Basic from './Basic';
import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

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
      <MainContent></MainContent>
      <Footer/>
      </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(App);
