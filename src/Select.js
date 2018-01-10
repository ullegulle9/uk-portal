import React, { Component } from 'react';
import './App.css';
// import Register from './Register.js';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  render() {
    let view;
    let options = this.props.options.map(o => {
      return <div key={o} className="drpdwn-option">{o}</div>
    })
    if (!this.state.active) {
      view = <div className="drpdwn-head">{this.props.title} <i className="material-icons icon" onClick={this.toggleMenu}>keyboard_arrow_down</i></div>;
    } else {
      view = <div><div className="drpdwn-head">{this.props.title} <i className="material-icons icon" onClick={this.toggleMenu}>keyboard_arrow_up</i></div>
      <ul className="drpdwn-content">
        {options}
      </ul>
      </div>
    }
    return (
      <div>
        {view}
      </div>
    );
  }

  toggleMenu(ev) {
    let active = !this.state.active;
    this.setState({
      active: active
    });
    // console.log(this.state.active);
  }
}

export default Select;