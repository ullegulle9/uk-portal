import React, { Component } from 'react';
import './App.css';
// import Register from './Register.js';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeClass: 'drpdwn-content',
      icon: 'keyboard_arrow_down',
      addText: ''
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }
  render() {
    let view;
    let options = this.props.options.map(o => {
      return <div key={o} className="drpdwn-option">{o} <input className="optionsCheckBox" type="checkbox" name={o} value={o} onChange={this.toggleCheckbox}/></div>
    })
    view = 
    <div>
      <div className="drpdwn-head">{this.props.title} 
        <button className="iconBtn" onClick={this.toggleDropdown}>
          <i className="material-icons icon" >{this.state.icon}</i>
        </button>
      </div>
      <ul className={this.state.activeClass}>
        {options}
        <div className="drpdwn-option noHover">
          <input onChange={this.handleInputChange} className="inputText inputText-sml" type="text" placeholder="Add"/>
          <button className="iconBtn" onClick={this.handleAddClick}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </ul>
    </div>;
    return (
      <div>
        {view}
      </div>
    );
  }

  toggleDropdown(ev) {
    let active = !this.state.active;
    let className;
    let icon;
    active ? className = 'drpdwn-content drpdwn-active' : className = 'drpdwn-content';
    active ? icon = 'keyboard_arrow_up' : icon = 'keyboard_arrow_down';
    this.setState({
      active: active,
      activeClass: className,
      icon: icon
    });
  }

  handleInputChange(ev) {
    this.setState({
      addText: ev.target.value
    });
  }

  handleAddClick(ev) {
    this.props.updateOptions(this.state.addText);
    this.setState({
      addText: ''
    });
  }

  toggleCheckbox(ev) {
    console.log(ev.target);
    let val = ev.target.value;
  }
}

export default Dropdown;