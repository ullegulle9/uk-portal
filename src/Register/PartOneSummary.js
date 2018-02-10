import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import * as actions from '../Actions/Actions';

class PartOneSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regData: {},
    }
    this.editClick = this.editClick.bind(this);
  }
  render() {
    return (
      <div className="summarySection">
        <div className="summaryTop">
          <span className="summaryTitle">Contact details</span>
          <i className="material-icons summaryEdit" onClick={this.editClick} >{"edit"}</i>
        </div>
        <div>
          <div className="summaryItems">
            <span>First name</span>
            <div>
            {this.state.regData.firstName}
            </div>
          </div>
          <div className="summaryItems">
            <span>Last name</span>
            <div>
            {this.state.regData.lastName}
            </div>
          </div>
          <div className="summaryItems">
            <span>Email</span>
            <div>
            {this.state.regData.emailAddress}
            </div>
          </div>
          <div className="summaryItems">
            <span>Date of birth</span>
            <div>
            {this.state.regData.dateOfBirth}
            </div>
          </div>
          <div className="summaryItems">
            <span>Contact telephone number</span>
            <div>
            {this.state.regData.phoneNumber}
            </div>
          </div>
          <div className="summaryItems">
            <span>City</span>
            <div>
            {this.state.regData.city}
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.regData);
    this.setState({
      regData: this.props.regData
    }, () => {
      console.log(this.state.regData);
    });
  }

  editClick(ev) {
    new Promise(res => {
      this.props.dispatch(actions.actionUpdateRegisterEdit(true));
      res();
    }).then(() => {
      this.props.p.history.push('/register/p1');
    })
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(PartOneSummary);