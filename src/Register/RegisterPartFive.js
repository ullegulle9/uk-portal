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
      status: 'Status',
      checked: false,
      errorMsg: ''
    }
    this.confirmClick = this.confirmClick.bind(this);
    this.handleConfirmCheck = this.handleConfirmCheck.bind(this);
  }
  render() {
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
            <input className="acceptCheckBox" type="checkbox" checked={this.state.checked} onChange={this.handleConfirmCheck}/>
            <span>I accept the terms</span>
          </div>
          <span className="errorMsgPartOne" >{this.state.errorMsg} </span>
        </div>
      </div>
      <div className="flexRight">
        <button className="btn btn-secondary" onClick={this.confirmClick}>Confirm</button>
      </div>
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.user.userObj) {
      this.props.history.push('/');
    }
  }

  confirmClick(ev) {
    console.log(new Date());
    if (this.state.checked) {
      let user = firebase.auth().currentUser;
      user.reload();
      if (user.emailVerified) {
        let fb = firebase.database();
        fb.ref(`users/${this.props.user.userObj.uid}`).set({
          contact_details: this.props.register.partOne,
          profile: this.props.register.partTwo,
          status: this.props.register.partThree,
          timeStamp: new Date().toString()
        });
        this.props.history.push('/register/cl');
      } else if (!user.emailVerified) {
        this.setState({
          errorMsg: 'Email has not been verified! Please click the link in the verification email sent to your email address and try again.'
        })
      }
      
    } else {
      this.setState({
        errorMsg: 'You need to accept the terms to submit!'
      })
    }
  }

  handleConfirmCheck(ev) {
    this.setState({
      checked: !this.state.checked
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(RegisterFive);