// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import MainContent from './MainContent.js';
// import Footer from './Footer.js';
// import Routes from './Router/routes';
import React, { Component } from "react";
// import { Link, Route, Redirect } from 'react-router-dom';
// import { push } from 'react-router-redux';
import firebase from 'firebase';
import {connect} from 'react-redux';
import * as actions from './Actions/Actions';



class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userObj: {}
    };
    this.googleAuth = this.googleAuth.bind(this);
    this.fbAuth = this.fbAuth.bind(this);
    this.register = this.register.bind(this);
  }
  render() {
    return (
      <div className="flexCenter">
        <div className="navBox startScreen">
          <button className="btn btn-main" onClick={this.register}>Register</button>
          <div>
            <button className="btn fb-btn" onClick={this.fbAuth}><i className="fa fa-facebook-official" aria-hidden="true"></i> Register</button>
            <button className="btn google-btn" onClick={this.googleAuth}><i className="fa fa-google" aria-hidden="true"></i> Register</button>
          </div>
        </div>
      </div>
    );
    // <Link to={'/register/p1'}>Register</Link>
  }

  register() {
    let obj = null;
    this.props.dispatch(actions.actionUpdateUserObj(obj));
    this.props.history.push('/register/p1');
  }

  fbAuth() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then( (result, err) => {
			if (err) {
        console.log(err);
      }
      console.log(result);
      let split = result.user.displayName.split(' ');
      console.log(split);
      let firstName = split[0];
      let lastName = split[split.length - 1];
      let obj = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: result.user.email,
        photoUrl: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
        uid: result.user.uid
      };
      // this.setState({
      //   userObj: obj
      // })
      this.props.dispatch(actions.actionUpdateUserObj(obj));
      this.props.history.push('/register/p1');
    })
    // additionalUserInfo
  }

  googleAuth() {
		var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then( (result, err) => {
			if (err) {
        alert(err);
      }
      let split = result.user.displayName.split(' ');
      // console.log(split);
      let firstName = split[0];
      let lastName = split[split.length - 1];
      console.log(firstName, lastName);
      console.log(result.user);
      let obj = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: result.user.email,
        photoUrl: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
        uid: result.user.uid
      }
      this.props.dispatch(actions.actionUpdateUserObj(obj));
      this.props.history.push('/register/p1');
		}).catch();
	};
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({})
// }

export default connect(mapStateToProps)(Basic);
