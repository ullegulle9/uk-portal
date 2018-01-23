import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

class PartThreeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regData: {},
    }
    this.editClick = this.editClick.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }

  
  render() {
    let branchList = this.props.regData.branch.map((x, i) => {
      if (i === this.props.regData.branch.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    let rolesList = this.props.regData.roles.map((x, i) => {
      if (i === this.props.regData.roles.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    let techniquesList = this.props.regData.techniques.map((x, i) => {
      if (i === this.props.regData.techniques.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    let languagesList = this.props.regData.languages.map((x, i) => {
      if (i === this.props.regData.languages.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    let applicationsList = this.props.regData.applications.map((x, i) => {
      if (i === this.props.regData.applications.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    let databaseList = this.props.regData.database.map((x, i) => {
      if (i === this.props.regData.database.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    return (
      <div className="summarySection">
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
          <div>
           {branchList}
           </div>
          </div>
          <div className="summaryItems">
          <span>Roles</span>
          <div>
           {rolesList}
           </div>
          </div>
          <div className="summaryItems">
          <span>Techniques</span>
          <div>
           {techniquesList}
           </div>
          </div>
          <div className="summaryItems">
          <span>Languages</span>
          <div>
           {languagesList}
           </div>
          </div>
          <div className="summaryItems">
          <span>Applications</span>
          <div>
           {applicationsList}
           </div>
          </div>
          <div className="summaryItems">
          <span>Database</span>
          <div>
           {databaseList}
           </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      regData: this.props.regData
    }, () => {
      console.log(this.state.regData);
    });
  }

  editClick(ev) {
    this.props.p.history.push('/register/p3');
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(PartThreeSummary);