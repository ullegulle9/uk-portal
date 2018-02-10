import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import CategoryBox from './CategoryBox';
import CategoryBoxEdit from './CategoryBoxEdit';
import firebase from 'firebase';
import SelectSml from '../BasicComponents/SelectSml';

class AreaOfInterst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      statusEdit: false,
      payRollEdit: false,
      status: '',
      payrollClaims: '',
      optionsStatus: ['Available', 'Not available']
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
    this.handlePayRollClaims = this.handlePayRollClaims.bind(this);
    this.updatePayRollClaims = this.updatePayRollClaims.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.toggleEditPayRoll = this.toggleEditPayRoll.bind(this);
  }
  render() {
    let branchList;
    if (this.props.regData.branch) {
      branchList = this.props.regData.branch.map((x, i) => {
        if (i === this.props.regData.branch.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      branchList = <span></span>
    }
    
    let rolesList;
    if (this.props.regData.roles) {
      rolesList = this.props.regData.roles.map((x, i) => {
        if (i === this.props.regData.roles.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      rolesList = <span></span>
    }

    let techniquesList;
    if (this.props.regData.techniques) {
      techniquesList = this.props.regData.techniques.map((x, i) => {
        if (i === this.props.regData.techniques.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      techniquesList = <span></span>
    }

    let languagesList;
    if (this.props.regData.languages) {
      languagesList = this.props.regData.languages.map((x, i) => {
        if (i === this.props.regData.languages.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      languagesList = <span></span>
    }

    let applicationsList;
    if (this.props.regData.applications) {
      applicationsList = this.props.regData.applications.map((x, i) => {
        if (i === this.props.regData.applications.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      applicationsList = <span></span>
    }

    let databaseList;
    if (this.props.regData.database) {
      databaseList = this.props.regData.database.map((x, i) => {
        if (i === this.props.regData.database.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      databaseList = <span></span>
    }
    let view;

    if (!this.state.edit) {
      view = <div className="profileFlex">
      <CategoryBox list={branchList} title={"Branch"} />
      <CategoryBox list={rolesList} title={"Roles"}/>
      <CategoryBox list={techniquesList} title={"Techniques"}/>
      <CategoryBox list={languagesList} title={"Languages"}/>
      <CategoryBox list={applicationsList} title={"Applications"}/>
      <CategoryBox list={databaseList} title={"Database"}/>
    </div>
    } else {
      view = <div className="profileFlex">
        <CategoryBoxEdit list={branchList} title={"Branch"} />
        <CategoryBoxEdit list={rolesList} title={"Roles"}/>
        <CategoryBoxEdit list={techniquesList} title={"Techniques"}/>
        <CategoryBoxEdit list={languagesList} title={"Languages"}/>
        <CategoryBoxEdit list={applicationsList} title={"Applications"}/>
        <CategoryBoxEdit list={databaseList} title={"Database"}/>
      </div>
    }
    let status;
    if (!this.state.statusEdit) {
      status = <div className="bioText">
      {this.state.status}
    </div>
    } else {
      status = <div className="bioText">
        <SelectSml updateStatus={this.handleStatus} title={this.state.status} options={this.state.optionsStatus}/>
      </div>
    }

    let payRoll;
    if (this.state.payRollEdit) {
      
      payRoll = <div className="editCVAvatar">
         <input className="inputText-xsml" type="number" value={this.state.payrollClaims} onChange={this.handlePayRollClaims} />
         <button className="btn btn-main btn-sml" onClick={this.updatePayRollClaims} >Update</button>
      </div>
    
    } else {
      payRoll = <div className="bioText">
        {this.state.payrollClaims} SEK/h
    </div>
    }
    
    return (
      <div className="profileMain">
      <div className="flex">
          <div className="profileBox profileBoxBio">
            <div className="topRow">
              <span>Status</span>
              <button className="iconBtn inconBtnWht">
              <i className="material-icons" onClick={this.toggleEditStatus} >{"edit"}</i>
              </button>
            </div>
            {status}
          </div>
          <div className="profileBox profileBoxBio">
            <div className="topRow">
              <span>Payroll claims</span>
              <button className="iconBtn inconBtnWht">
              <i className="material-icons" onClick={this.toggleEditPayRoll} >{"edit"}</i>
              </button>
            </div>
            {payRoll}
          </div>
        </div>
        <div className="profileBox">
          <div className="topRow">
            <span>Area of interest</span>
              <button className="iconBtn inconBtnWht">
                <i className="material-icons" onClick={this.toggleEdit} >{"edit"}</i>
              </button>
            </div>
          {view}
        </div>
        
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      status: this.props.regData.status,
      payrollClaims: this.props.regData.payrollClaims
    });
  }

  handleStatus(status) {
    this.setState({
      status: status,
      statusEdit: !this.state.statusEdit
    }, () => {
      this.updateStatus();
    });
  }

  handlePayRollClaims(ev) {
    this.setState({
      payrollClaims: ev.target.value
    });
  }

  updateStatus() {
    let fb = firebase.database();
    let uid = this.props.user.fbUserData.contact_details.uid;
    fb.ref(`users/${uid}/status`).update({
      status: this.state.status
    })
  }

  updatePayRollClaims() {
    let fb = firebase.database();
    let uid = this.props.user.fbUserData.contact_details.uid;
    fb.ref(`users/${uid}/status`).update({
      payrollClaims: this.state.payrollClaims
    });
    this.setState({
      payRollEdit: !this.state.payRollEdit
    })
  }

  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({
      edit: edit
    })
  }

  toggleEditStatus() {
    let edit = !this.state.statusEdit;
    this.setState({
      statusEdit: edit
    })
  }

  toggleEditPayRoll() {
    let edit = !this.state.payRollEdit;
    this.setState({
      payRollEdit: edit
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(AreaOfInterst);