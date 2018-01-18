import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select.js';

class RegisterThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsStatus: ['Available', 'Not available'],
      status: 'Status',
      payrollClaims: undefined
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handlePayrollClaims = this.handlePayrollClaims.bind(this);
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
              <input type="number" name="claims" placeholder="SEK/h" value={this.state.payrollClaims} className="inputText" onChange={this.handlePayrollClaims}/>
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

  handlePayrollClaims(ev) {
    this.setState({
      payrollClaims: ev.target.value
    });
  }

  handleClick() {
    let obj = {
      status: this.state.status,
      payrollClaims: this.state.payrollClaims
    }
    this.props.updateRegData3(obj);
    this.props.updateView('registerFour');
  }
}

export default RegisterThree;