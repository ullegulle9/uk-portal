import React, { Component } from 'react';
import './App.css';
import Register from './Register.js';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'register'
    };
    this.click = this.click.bind(this);
  }
  render() {
    let view;
    if (this.state.view === 'standard') {
      // console.log('standard');
      view = 
      <div className="flexCenter">
      <div className="navBox">
          <button className="btn btn-large btn-main" onClick={this.click}>Register</button>
          <button className="btn btn-large btn-main">Login</button>
        </div>
        </div>;
    } else if (this.state.view === 'register') {
      view = <Register/>
    }
    return (
      <div className="mainContent">
        {view}
      </div>
    );
  }

  click(ev) {
    this.setState({
      view: 'register'
    });
  }
}

export default MainContent;