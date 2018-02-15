import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import List from './List';
import EditList from './EditList';
import SelectSml from '../BasicComponents/SelectSml';

class PartThreeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regData: {},
      edit: false,
      payrollClaims: '',
      status: '',
      optionsStatus: ['Available', 'Not available']
    }
    this.editClick = this.editClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.updateBranch = this.updateBranch.bind(this);
    this.updateDatabase = this.updateDatabase.bind(this);
    this.updateApplications = this.updateApplications.bind(this);
    this.updateLanguages = this.updateLanguages.bind(this);
    this.updateTechniques = this.updateTechniques.bind(this);
    this.updateRoles = this.updateRoles.bind(this);
    this.handlePayRollClaims = this.handlePayRollClaims.bind(this);
    this.updatePayRollClaims = this.updatePayRollClaims.bind(this);
  }

  
  render() {
    let branchList = <List list={this.props.regData.branch}/>
    let rolesList = <List list={this.props.regData.roles}/>
    let techniquesList = <List list={this.props.regData.techniques}/>
    let languagesList = <List list={this.props.regData.languages}/>
    let applicationsList = <List list={this.props.regData.applications} />
    let databaseList = <List list={this.props.regData.database}/>
    let editBranchList = <EditList list={this.props.regData.branch} update={this.updateBranch} />
    let editRolesList = <EditList list={this.props.regData.roles} update={this.updateRoles}/>
    let editTechniquesList = <EditList list={this.props.regData.techniques} update={this.updateTechniques}/>
    let editLanguagesList = <EditList list={this.props.regData.languages} update={this.updateLanguages}/>
    let editApplicationsList = <EditList list={this.props.regData.applications} update={this.updateApplications}/>
    let editDatabaseList = <EditList list={this.props.regData.database} update={this.updateDatabase}/>

    let view;

    if (this.state.edit) {
      view = <div className="summarySection">
      <div className="summaryTop">
        <span className="summaryTitle">Profile</span>
        <i className="material-icons summaryEdit" onClick={this.editClick} >{"edit"}</i>
      </div>
      <div>
      <div className="summaryItems">
        <span>Status</span>
        <div>
         <SelectSml updateStatus={this.handleStatus} title={this.state.status} options={this.state.optionsStatus}/>
         </div>
        </div>
        <div className="summaryItems">
        <span>Payroll claims</span>
        <div>
         <input className="inputText-xsml" type="number" value={this.state.payrollClaims} onChange={this.handlePayRollClaims} />
         <button className="btn btn-main btn-sml" onClick={this.updatePayRollClaims} >Update</button>
         </div>
        </div>
        <div className="summaryItems">
        <span>Branch</span>
         {editBranchList}
        </div>
        <div className="summaryItems">
        <span>Roles</span>
         {editRolesList}
        </div>
        <div className="summaryItems">
        <span>Techniques</span>
         {editTechniquesList}
        </div>
        <div className="summaryItems">
        <span>Languages</span>
         {editLanguagesList}
        </div>
        <div className="summaryItems">
        <span>Applications</span>
         {editApplicationsList}
        </div>
        <div className="summaryItems">
        <span>Database</span>
         {editDatabaseList}
        </div>
      </div>
    </div>
    } else {
      view = <div className="summarySection">
      <div className="summaryTop">
        <span className="summaryTitle">Area of interest</span>
        <i className="material-icons summaryEdit" onClick={this.editClick} >{"edit"}</i>
      </div>
      <div>
        <div className="summaryItems">
        <span>Status</span>
        <div>
         {this.props.regData.status}
         </div>
        </div>
        <div className="summaryItems">
        <span>Payroll claims</span>
        <div>
         {this.props.regData.payrollClaims}
         </div>
        </div>
        <div className="summaryItems">
        <span>Branch</span>
         {branchList}
        </div>
        <div className="summaryItems">
        <span>Roles</span>
         {rolesList}
        </div>
        <div className="summaryItems">
        <span>Techniques</span>
         {techniquesList}
        </div>
        <div className="summaryItems">
        <span>Languages</span>
         {languagesList}
        </div>
        <div className="summaryItems">
        <span>Applications</span>
         {applicationsList}
        </div>
        <div className="summaryItems">
        <span>Database</span>
         {databaseList}
        </div>
      </div>
    </div>
    }

    return (
      <span>{view}</span>
    );
  }

  componentDidMount() {
    this.setState({
      regData: this.props.regData,
      payrollClaims: this.props.regData.payrollClaims,
      status: this.props.regData.status
    }, () => {
    });
  }

  editClick(ev) {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleStatus(status) {
    this.setState({
      status: status
    }, () => {
      this.updateStatus();
    });
  }

  updateStatus() {
    let obj = Object.assign({}, this.state.regData);
    obj.status = this.state.status;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
      this.setState({
        edit: !this.state.edit
      });
    })
  }

  updateBranch(val) {
    let arr = this.state.regData.branch;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.branch = arr;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
    })
  }

  updateRoles(val) {
    let arr = this.state.regData.roles;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.roles = arr;
    this.setState({
      regData: obj
    }, () => {
      // console.log(this.state.regData);
      this.props.updateRegData(this.state.regData);
    })
  }

  updateLanguages(val) {
    let arr = this.state.regData.languages;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.languages = arr;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
    })
  }

  updateApplications(val) {
    let arr = this.state.regData.applications;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.applications = arr;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
    })
  }

  updateTechniques(val) {
    let arr = this.state.regData.techniques;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.techniques = arr;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
    })
  }

  updateDatabase(val) {
    let arr = this.state.regData.database;
    arr.push(val);
    let obj = Object.assign({}, this.state.regData);
    obj.database = arr;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
    })
  }

  handlePayRollClaims(ev) {
    this.setState({
      payrollClaims: ev.target.value
    });
  }

  updatePayRollClaims() {
    let obj = Object.assign({}, this.state.regData);
    obj.payrollClaims = this.state.payrollClaims;
    this.setState({
      regData: obj
    }, () => {
      this.props.updateRegData(this.state.regData);
      this.setState({
        edit: !this.state.edit
      });
    })
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(PartThreeSummary);