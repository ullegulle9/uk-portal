import React, { Component } from 'react';
import '../App.css';
// import Register from './Register.js';

class DropdownOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    // this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleAddClick = this.handleAddClick.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }
  render() {
    return (
      <div className="drpdwn-option">
        {this.props.o} 
        <input checked={this.state.checked} className="optionsCheckBox" type="checkbox" name={this.props.o} value={this.props.o} onChange={this.toggleCheckbox}/>
      </div>
    );
  }

  toggleCheckbox(ev) {
    this.setState({
      checked: !this.state.checked
    });
    let val = ev.target.value;
    ev.target.checked ? this.props.addCheckedValue(val) : this.props.removeCheckedValue(val);
  }
}

export default DropdownOption;