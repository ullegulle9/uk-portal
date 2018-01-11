import React, { Component } from 'react';
import './App.css';
import RegisterOne from './RegisterPartOne.js';
import RegisterTwo from './RegisterPartTwo.js';
import RegisterThree from './RegisterPartThree.js';
import RegisterFour from './RegisterPartFour.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'registerTwo'
    }
    this.updateView = this.updateView.bind(this);
  }
  render() {
    let view;
    switch(this.state.view) {
      case 'registerOne': view = 
      <RegisterOne updateView={this.updateView}></RegisterOne>;
      break;
      case 'registerTwo': view = 
      <RegisterTwo updateView={this.updateView}></RegisterTwo>;
      break;
      case 'registerThree': view = 
      <RegisterThree updateView={this.updateView}></RegisterThree>;
      break;
      case 'registerFour': view = 
      <RegisterFour></RegisterFour>
      break;
      default: view = 
      <RegisterOne updateView={this.updateView}></RegisterOne>;
    }
    return (
      <div className="register">
      {view}
      </div>
    );
  }

  updateView(view) {
    this.setState({
      view: view
    });
  }
}

export default Register;