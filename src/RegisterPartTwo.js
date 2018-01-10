import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Select from './Select.js';

class RegisterTwo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      optionsRoles: ['Project leader', 'Scrum master', 'Developer'],
      optionsTechniques: ['.NET', 'Angular.js', 'MVC', 'AJAX', 'jQuery', 'LINQ', 'WCF', 'WPF', 'Silverlight', 'React.js', 'Vue.js', 'Node.js', 'Express', 'MongoDb', 'Mongoose'],
      optionsLanguages: ['Javascript', 'C#', 'C++', 'Java', 'Python', 'Ruby', 'PHP'],
      optionsStatus: ['Available', 'Not available']
    }
  }
  render() {
    return (
      <div className="registerTwo">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 2 - Profile</span>
        </div>
        <div className="flexCenter">
          <div className="r2formContainer">
            <Dropdown title="Roles" options={this.state.optionsRoles}/>
            <Dropdown title="Techniques" options={this.state.optionsTechniques}/>
            <Dropdown title="Languages" options={this.state.optionsLanguages}/>
            <Dropdown title="Applications" options={[]}/>
            <Dropdown title="Database" options={[]}/>
            <Dropdown title="Methods" options={[]}/>
            <Select title="Status" options={this.state.optionsStatus}/>
          </div>
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

export default RegisterTwo;