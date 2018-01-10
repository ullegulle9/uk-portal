import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerContactBox">
          <span>mail@mail.com</span>
        <span>20 Test Street, 33 333</span>
          <span>Göteborg</span>
        </div>
      </div>
    );
  }
}

export default Footer;