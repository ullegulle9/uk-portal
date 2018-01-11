import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Select from './Select.js';

class RegisterTwo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateOptionsRoles = this.updateOptionsRoles.bind(this);
    this.updateOptionsTechniques = this.updateOptionsTechniques.bind(this);
    this.updateOptionsLanguages = this.updateOptionsLanguages.bind(this);
    this.updateOptionsApplications = this.updateOptionsApplications.bind(this);
    this.updateOptionsDatabase = this.updateOptionsDatabase.bind(this);
    this.updateCheckedRoles = this.updateCheckedRoles.bind(this);
    this.updateCheckedTechniques = this.updateCheckedTechniques.bind(this);
    this.updateCheckedLanguages = this.updateCheckedLanguages.bind(this);
    this.updateCheckedApplications = this.updateCheckedApplications.bind(this);
    this.updateCheckedDatabase = this.updateCheckedDatabase.bind(this);
    this.state = {
      optionsRoles: ['Project leader', 'Scrum master', 'Developer'],
      optionsTechniques: ['.NET', 'Angular.js', 'MVC', 'AJAX', 'jQuery', 'LINQ', 'WCF', 'WPF', 'Silverlight', 'React.js', 'Vue.js', 'Node.js', 'Express', 'MongoDb', 'Mongoose'],
      optionsLanguages: ['Javascript', 'C#', 'C++', 'Java', 'Python', 'Ruby', 'PHP'],
      optionsStatus: ['Available', 'Not available'],
      optionsApplications: [],
      optionsDatabase: [],
      status: 'Status',
      checkedRoles: [],
      checkedTechniques: [],
      checkedLanguages: [],
      checkedApplications: [],
      checkedDatabase: []
    }
  }
  render() {
    console.log(this.state.checkedRoles);
    console.log(this.state.checkedTechniques);
    console.log(this.state.checkedLanguages);
    console.log(this.state.checkedApplications);
    console.log(this.state.checkedDatabase);
    return (
      <div className="registerTwo">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 2 - Profile</span>
        </div>
        <div className="flexCenter">
          <div className="r2formContainer">
            <div>
              <span>Specify your current status</span>
              <Select updateStatus={this.updateStatus} title={this.state.status} options={this.state.optionsStatus}/>
            </div>
            <div>
              <span>Previous roles</span>
              <Dropdown updateChecked={this.updateCheckedRoles} title="Roles" options={this.state.optionsRoles} updateOptions={this.updateOptionsRoles}/>
            </div>
            <div>
              <span>Techniques you can handle</span>
              <Dropdown updateChecked={this.updateCheckedTechniques} title="Techniques" options={this.state.optionsTechniques} updateOptions={this.updateOptionsTechniques}/>
            </div>
            <div>
              <span>Languages you know</span>
              <Dropdown updateChecked={this.updateCheckedLanguages} title="Languages" options={this.state.optionsLanguages} updateOptions={this.updateOptionsLanguages}/>
            </div>
            <div>
              <span>Applications knowlegde</span>
              <Dropdown updateChecked={this.updateCheckedApplications} title="Applications" options={this.state.optionsApplications} updateOptions={this.updateOptionsApplications}/>
            </div>
            <div>
              <span>Database knowlegde</span>
              <Dropdown updateChecked={this.updateCheckedDatabase} title="Database" options={this.state.optionsDatabase} updateOptions={this.updateOptionsDatabase}/>
            </div>
            <div>
              <label for="cvUpload" className="cvUploadLabel">Upload CV</label>
              <input type="file" id="cvUpload"/>
            </div>
            {/* <Dropdown title="Methods" options={[]}/> */}
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

  updateStatus(status) {
    this.setState({
      status: status
    });
  }

  updateOptionsRoles(option) {
    let options = this.state.optionsRoles;
    options.push(option);
    this.setState({
      optionsRoles: options
    });
  }

  updateOptionsTechniques(option) {
    let options = this.state.optionsTechniques;
    options.push(option);
    this.setState({
      optionsTechniques: options
    });
  }

  updateOptionsLanguages(option) {
    let options = this.state.optionsLanguages;
    options.push(option);
    this.setState({
      optionsLanguages: options
    });
  }

  updateOptionsApplications(option) {
    let options = this.state.optionsApplications;
    options.push(option);
    this.setState({
      optionsApplications: options
    });
  }

  updateOptionsDatabase(option) {
    let options = this.state.optionsDatabase;
    options.push(option);
    this.setState({
      optionsDatabase: options
    });
  }

  updateCheckedRoles(list) {
    this.setState({
      checkedRoles: list
    });
  }

  updateCheckedTechniques(list) {
    this.setState({
      checkedTechniques: list
    });
  }

  updateCheckedLanguages(list) {
    this.setState({
      checkedLanguages: list
    });
  }

  updateCheckedApplications(list) {
    this.setState({
      checkedApplications: list
    });
  }

  updateCheckedDatabase(list) {
    this.setState({
      checkedDatabase: list
    });
  }
}

export default RegisterTwo;