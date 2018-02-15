import '../App.css';
import firebase from 'firebase';
import React, { Component } from "react";
import * as actions from '../Actions/Actions';
import {connect} from 'react-redux';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
      errorMsg: ''
    }
    this.adminLogin = this.adminLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
  }
  render() {
    return (
      <div className="flexCenter">
        <div className="navBox startScreen">
          <input type="email" className="inputText" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
          <input type="password" className="inputText" value={this.state.pw} onChange={this.handlePWChange} placeholder="Password" />
          <button className="btn btn-main" onClick={this.adminLogin} >Admin login</button>
          <div className="errorMsgLogin"><span>{this.state.errorMsg}</span></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleEmailChange(ev) {
    this.setState({
      email: ev.target.value
    });
  }

  handlePWChange(ev) {
    this.setState({
      pw: ev.target.value
    });
  }

  adminLogin() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
    .then( ( result ) => {
      if (result.uid === 'CosFo1S36UYpN1xmBogZHDJETQo2') {
        this.props.dispatch(actions.actionUpdateUserObj(result));
        this.props.history.push('admin/start');
      } else {
        this.setState({
          errorMsg: 'This user is not an admin'
        });
        this.props.dispatch(actions.actionUpdateUserObj(null));
      }
    }).catch(error => {
      let errorMessage = error.message;
      this.setState({
        errorMsg: errorMessage
      });
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

// SIGN OUT

// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

export default connect(mapStateToProps)(AdminLogin);
