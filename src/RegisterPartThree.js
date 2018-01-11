import React, { Component } from 'react';
import './App.css';
import Select from './Select.js';

class RegisterThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsStatus: ['Available', 'Not available'],
      status: 'Status'
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    return (
      <div className="registerThree">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 3 - Searching for</span>
        </div>
        <div className="flexCenter">
          <div className="r2formContainer">
            <div>
              <span>Specify your current status</span>
              <Select updateStatus={this.updateStatus} title={this.state.status} options={this.state.optionsStatus}/>
            </div>
            <div>
              <span>Payroll claims</span>
              <input type="number" name="claims" placeholder="SEK/h" className="inputText"/>
            </div>
          </div>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  updateStatus(status) {
    this.setState({
      status: status
    });
  }

  handleClick() {
    this.props.updateView('registerFour');
  }
}

export default RegisterThree;