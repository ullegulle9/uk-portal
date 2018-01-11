import React, { Component } from 'react';
import './App.css';
import Select from './Select.js';

class RegisterFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsStatus: ['Available', 'Not available'],
      status: 'Status'
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    return (
      <div className="registerThree">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 4 - Confirmation</span>
        </div>
        <div className="flexCenter">
          <div className="r2formContainer">
            <div>
              <span>Accept terms and agreements</span>
              {/* <Select updateStatus={this.updateStatus} title={this.state.status} options={this.state.optionsStatus}/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterFour;