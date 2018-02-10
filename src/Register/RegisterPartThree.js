import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select.js';
import Dropdown from '../BasicComponents/Dropdown.js';
import {connect} from 'react-redux';
import * as actions from '../Actions/Actions';

class RegisterThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Status',
      payrollClaims: '',
      optionsBranch: ['Telecom', 'Automative', 'Pharmasuiticals', 'Finance', 'Logistics', 'Industrial', 'Security'],
      optionsRoles: ['Project leader', 'Scrum master', 'Developer'],
      optionsTechniques: ['.NET', 'Angular.js', 'MVC', 'AJAX', 'jQuery', 'LINQ', 'WCF', 'WPF', 'Silverlight', 'React.js', 'Vue.js', 'Node.js', 'Express', 'MongoDb', 'Mongoose'],
      optionsLanguages: ['Javascript', 'C#', 'C++', 'Java', 'Python', 'Ruby', 'PHP'],
      optionsStatus: ['Available', 'Not available'],
      optionsApplications: [],
      optionsDatabase: [],
      checkedBranch: [],
      checkedRoles: [],
      checkedTechniques: [],
      checkedLanguages: [],
      checkedApplications: [],
      checkedDatabase: [],
      errorMsg: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handlePayrollClaims = this.handlePayrollClaims.bind(this);
    this.updateOptionsBranch = this.updateOptionsBranch.bind(this);
    this.updateOptionsRoles = this.updateOptionsRoles.bind(this);
    this.updateOptionsTechniques = this.updateOptionsTechniques.bind(this);
    this.updateOptionsLanguages = this.updateOptionsLanguages.bind(this);
    this.updateOptionsApplications = this.updateOptionsApplications.bind(this);
    this.updateOptionsDatabase = this.updateOptionsDatabase.bind(this);
    this.updateCheckedBranch = this.updateCheckedBranch.bind(this);
    this.updateCheckedRoles = this.updateCheckedRoles.bind(this);
    this.updateCheckedTechniques = this.updateCheckedTechniques.bind(this);
    this.updateCheckedLanguages = this.updateCheckedLanguages.bind(this);
    this.updateCheckedApplications = this.updateCheckedApplications.bind(this);
    this.updateCheckedDatabase = this.updateCheckedDatabase.bind(this);
  }
  render() {
    return (
      <div className="registerThree">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 3 - What are you interested in working with?</span>
        </div>
        {/* <div className="flexCenter"> */}
          <div className="r2formContainer">
          <div>
            <div>
              <span>Specify your current status</span>
              <Select updateStatus={this.updateStatus} title={this.state.status} options={this.state.optionsStatus}/>
            </div>
            <div>
              <span>Payroll claims</span>
              <input type="number" name="claims" placeholder="SEK/h" value={this.state.payrollClaims} className="inputText inputNumber" onChange={this.handlePayrollClaims}/>
            </div>
            <div>
              <span>Branch</span>
              <Dropdown updateChecked={this.updateCheckedBranch} title="Branch" options={this.state.optionsBranch} updateOptions={this.updateOptionsRoles}/>
            </div>
            <div>
              <span>Preferred roles</span>
              <Dropdown updateChecked={this.updateCheckedRoles} title="Roles" options={this.state.optionsRoles} updateOptions={this.updateOptionsRoles}/>
            </div>
            </div>
            <div>
            <div>
              <span>Preferred techniques</span>
              <Dropdown updateChecked={this.updateCheckedTechniques} title="Techniques" options={this.state.optionsTechniques} updateOptions={this.updateOptionsTechniques}/>
            </div>
            <div>
              <span>Preferred languages</span>
              <Dropdown updateChecked={this.updateCheckedLanguages} title="Languages" options={this.state.optionsLanguages} updateOptions={this.updateOptionsLanguages}/>
            </div>
            <div>
              <span>Preferred applications</span>
              <Dropdown updateChecked={this.updateCheckedApplications} title="Applications" options={this.state.optionsApplications} updateOptions={this.updateOptionsApplications}/>
            </div>
            <div>
              <span>Preferred database</span>
              <Dropdown updateChecked={this.updateCheckedDatabase} title="Database" options={this.state.optionsDatabase} updateOptions={this.updateOptionsDatabase}/>
            </div>
            
            </div>
            <div className="errorMsgPartOne">
              {this.state.errorMsg}
            </div>
          </div>
        {/* </div> */}
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // if (!this.props.user.userObj) {
    //   this.props.history.push('/');
    // }
  }

  updateStatus(status) {
    this.setState({
      status: status
    });
  }

  handlePayrollClaims(ev) {
    this.setState({
      payrollClaims: ev.target.value
    });
  }

  handleClick() {
    if (this.state.status !== 'Status') {
      let obj = {
        status: this.state.status,
        payrollClaims: this.state.payrollClaims,
        branch: this.state.checkedBranch,
        roles: this.state.checkedRoles,
        techniques: this.state.checkedTechniques,
        languages: this.state.checkedLanguages,
        applications: this.state.checkedApplications,
        database: this.state.checkedDatabase
      }
      console.log(obj);
      // this.props.updateRegData2(obj);
      // this.props.updateView('registerThree');
      this.props.dispatch(actions.actionUpdateRegisterPartThree(obj));
      this.props.history.push('/register/p4');
    } else {
      this.setState({
        errorMsg: 'Please specify your current status'
      });
    }
    
  }
  updateOptionsBranch(option) {
    let options = this.state.optionsBranch;
    options.push(option);
    this.setState({
      optionsBranch: options
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

  updateCheckedBranch(list) {
    this.setState({
      checkedBranch: list
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

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(RegisterThree);