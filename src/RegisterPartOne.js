import React, { Component } from 'react';
import './App.css';

class RegisterOne extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="registerOne">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 1 - Contact details</span>
        </div>
        <div className="flexCenter">
          <div className="formContainer">
            <div>
              <input type="text" name="firstname" placeholder="First name" className="inputText"/>
              <input type="text" name="lastname" placeholder="Last name" className="inputText"/>
            </div>
            <div>
              <input type="email" name="email" placeholder="Email address" className="inputText"/>
            </div>
            <div>
              <input type="email" name="emailCopy" placeholder="Repeat email address" className="inputText"/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="inputText"/>
              <input type="password" placeholder="Repeat password" className="inputText"/>
            </div>
            <div>
              <input type="text" name="city" placeholder="City" className="inputText"/>
            </div>
          </div>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  handleClick() {
    this.props.updateView('registerTwo');
  }
}

export default RegisterOne;