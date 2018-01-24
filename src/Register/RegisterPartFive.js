import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import {connect} from 'react-redux';
// import Select from './BasicComponents/Select.js';

class RegisterFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsStatus: ['Available', 'Not available'],
      status: 'Status'
    }
    this.confirmClick = this.confirmClick.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    // console.log(this.props.user.userObj.emailAddress);
    // console.log(typeof(this.props.user.userObj.emailAddress));
    return (
      <div className="registerThree">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 5 - Confirmation</span>
        </div>
        <div className="flexCenter">
          <div>
            <div className="acceptBox">
              <span>Härmed godkänner jag att Omegapoint lagrar persondata såsom intervjunoteringar, CV och eventuellt information från referenstagningar i rekryteringssyfte. Dina uppgifter behandlas givetvis med fullständig sekretess och i enlighet med Dataskyddsförordningen. Om du vill ändra eller ta bort dina uppgifter, kan du när som helst göra detta genom att skicka oss ett e-postmeddelande</span>
              {/* <Select updateStatus={this.updateStatus} title={this.state.status} options={this.state.optionsStatus}/> */}
            </div>
            <div className="acceptFlex">
              <input className="acceptCheckBox" type="checkbox"/>
              <span>I accept the terms</span>
            </div>
          </div>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.confirmClick}>Confirm</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props.user.userObj.uid);
    // if (!this.props.user.userObj) {
    //   this.props.history.push('/');
    // }
  }

  confirmClick(ev) {
    let fb = firebase.database();
    fb.ref(`users/${this.props.user.userObj.uid}`).set({
      contact_details: this.props.register.partOne,
      profile: this.props.register.partTwo,
      status: this.props.register.partThree
    });
    // fb.ref('/users').once('value', snap => {
    //   console.log(snap.val());
    // })
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(RegisterFive);