import React, { Component } from 'react';
import './App.css';
// import Register from './Register.js';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    let view;
    let options = this.props.options.map(o => {
      return <div key={o} className="drpdwn-option">{o} <input className="optionsCheckBox" type="checkbox" name={o} value={o}/></div>
    })
    if (!this.state.active) {
      view = <div><div className="drpdwn-head">{this.props.title} <button className="iconBtn" onClick={this.toggleDropdown}><i className="material-icons icon" >keyboard_arrow_down</i></button></div>
      <ul className="drpdwn-content">
        {options}
      </ul>
      </div>;
    } else if (this.state.active) {
      view = <div><div className="drpdwn-head">{this.props.title}<button className="iconBtn" onClick={this.toggleDropdown}><i className="material-icons icon" >keyboard_arrow_up</i></button></div>
      <ul className="drpdwn-content drpdwn-active">
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

  toggleDropdown(ev) {
    let active = !this.state.active;
    this.setState({
      active: active
    });
  }
}

export default Dropdown;