import React, { Component } from 'react';
import '../App.css';
import RegisterOne from './RegisterPartOne.js';
import RegisterTwo from './RegisterPartTwo.js';
import RegisterThree from './RegisterPartThree.js';
import RegisterFour from './RegisterPartFour.js';
import RegisterFive from './RegisterPartFive.js';
import Redirect from 'react-router-dom/Redirect';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'registerOne',
      regData1: {},
      regData2: {},
      regData3: {},
      regData4: {}
    }
    this.updateView = this.updateView.bind(this);
    this.updateRegData1 = this.updateRegData1.bind(this);
    this.updateRegData2 = this.updateRegData2.bind(this);
    this.updateRegData3 = this.updateRegData3.bind(this);
    this.updateRegData4 = this.updateRegData4.bind(this);
  }
  render() {
    let view;
    if (this.props.loggedIn) {
      view = <Redirect to='/'></Redirect>
    } else {
      switch(this.state.view) {
        case 'registerOne': view = 
        <RegisterOne updateRegData1={this.updateRegData1} userObj={this.props.location.state.userObj} updateView={this.updateView}></RegisterOne>;
        break;
        case 'registerTwo': view = 
        <RegisterTwo updateRegData2={this.updateRegData2} userObj={this.props.userObj} updateView={this.updateView}></RegisterTwo>;
        break;
        case 'registerThree': view = 
        <RegisterThree updateRegData3={this.updateRegData3} userObj={this.props.userObj} updateView={this.updateView}></RegisterThree>;
        break;
        case 'registerFour': view = 
        <RegisterFour updateView={this.updateView} regData1={this.state.regData1} regData2={this.state.regData2} regData3={this.state.regData3} updateRegData4={this.updateRegData4}></RegisterFour> 
        // <p>Part 4</p>
        break;
        case 'registerFive': view = 
        <RegisterFive regData1={this.state.regData1} regData2={this.state.regData2}  updateView={this.updateView}/>
        break;
        default: view = 
        <RegisterOne updateView={this.updateView}></RegisterOne>;
    }
    
    }
    return (
      <div className="register">
      {view}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.location);
  }

  updateView(view) {
    this.setState({
      view: view
    });
  }

  updateRegData1(obj) {
    this.setState({
      regData1: obj
    });
  }
  updateRegData2(obj) {
    this.setState({
      regData2: obj
    });
  }
  updateRegData3(obj) {
    this.setState({
      regData3: obj
    });
  }
  updateRegData4(obj) {
    this.setState({
      regData4: obj
    });
  }
}

export default Register;