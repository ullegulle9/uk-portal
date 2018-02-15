import React, { Component } from 'react';
import '../App.css';
// import Register from './Register.js';

class SelectBurger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeClass: 'drpdwn-content',
      icon: 'keyboard_arrow_down'
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let view;
    let options = this.props.options.map(o => {
      return <div key={o} className="drpdwn-option" onClick={this.handleClick}>{o}</div>
    })
    view = 
    <div>
      <div className="drpdwn-head-burger">
        <button className="iconBtn" onClick={this.toggleDropdown}>
          <i className="material-icons burgerIcon" >menu</i>
        </button>
      </div>
      <ul className={this.state.activeClass}>
        {options}
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
  
  handleClick(ev) {
    this.props.updateStatus(ev.target.innerHTML);
    this.toggleDropdown();
  }
}

export default SelectBurger;