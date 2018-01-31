// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent';
import Footer from './Footer';
import Header from './Header';
// import Register from './Register/Register';
// import Basic from './Basic';
import React, { Component } from "react";
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="flexCenter">
        <div className="App">
        <Header/>
      <MainContent/>
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

// SIGN OUT

// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

export default connect(mapStateToProps)(App);
