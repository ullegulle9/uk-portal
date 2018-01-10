import React, { Component } from 'react';
import './App.css';

class RegisterThree extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="registerThree">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 3 - Searching for</span>
        </div>
        <div className="flexCenter">
          <p>part 3</p>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  handleClick() {
    this.props.updateView('registerThree');
  }
}

export default RegisterThree;