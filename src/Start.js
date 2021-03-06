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



class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
      errorMsg: ''
    };
    this.regClick = this.regClick.bind(this);
    this.googleAuth = this.googleAuth.bind(this);
    this.fbAuth = this.fbAuth.bind(this);
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePw = this.handlePw.bind(this);
  }
  render() {
    return (
      <div className="flexCenter">
        <div className="navBox startScreen">
          <input type="email" name="email" placeholder="Email address" className="inputText" value={this.state.email} onChange={this.handleEmail}/>
          <input type="password" name="pw" placeholder="Password" className="inputText" value={this.state.pw} onChange={this.handlePw}/>
          <button className="btn btn-main" onClick={this.login}> Login</button>
          <div>
            <button className="btn btn-main fb-btn" onClick={this.fbAuth}><i className="fa fa-facebook-official" aria-hidden="true"></i> Login</button>
            <button className="btn btn-main google-btn" onClick={this.googleAuth}><i className="fa fa-google" aria-hidden="true"></i> Login</button>
          </div>
          <span className="regLink">No account? <span className="regLinkLink" onClick={this.regClick} > Register here!</span></span>
          <div className="errorMsgLogin"><span>{this.state.errorMsg}</span></div>
        </div>
      </div>
    );
    // <Link to={'/register/p1'}>Register</Link>
  }

  regClick() {
    let obj = null;
    this.props.dispatch(actions.actionUpdateUserObj(obj));
    this.props.history.push('/register');
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
    .then( ( result ) => {
      this.props.dispatch(actions.actionUpdateUserObj(result));
      this.props.history.push('/my-page');
    }).catch(error => {
      let errorMessage = error.message;
      this.setState({
        errorMsg: errorMessage
      });
    });
  }

  fbAuth() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      let split = result.user.displayName.split(' ');
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
      new Promise( (res, rej) => {
        let fb = firebase.database();
        fb.ref().child('users')
        .child(result.user.uid)
        .once('value', snap => {
          let data = snap.val();
          if (data) {
            res('Registered user');
          } else {
            rej();
          }
        })
      }).then( (res) => {
        this.props.dispatch(actions.actionUpdateUserObj(obj));
        this.props.history.push('/my-page');
      }).catch( () => {
        this.setState({
          errorMsg: 'This email address has not been registered! Please proceed to register page.'
        })
        let user = firebase.auth().currentUser;
        user.delete().then(() => {
        }).catch((error) => {
          console.log(error);
        });
      })
    }).catch(err => {
      this.setState({
        errorMsg: err.message
      });
    })
  }

  googleAuth() {
		let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      let split = result.user.displayName.split(' ');
      let firstName = split[0];
      let lastName = split[split.length - 1];
      let obj = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: result.user.email,
        photoUrl: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
        uid: result.user.uid
      }
      new Promise( (res, rej) => {
        let fb = firebase.database();
        fb.ref().child('users')
        .child(result.user.uid)
        .once('value', snap => {
          let data = snap.val();
          if (data) {
            res('Registered user');
          } else {
            rej();
          }
        })
      }).then( (res) => {
        this.props.dispatch(actions.actionUpdateUserObj(obj));
        this.props.history.push('/my-page');
      }).catch( () => {
        this.setState({
          errorMsg: 'This email address has not been registered! Please proceed to register page.'
        })
        let user = firebase.auth().currentUser;
        user.delete().then(() => {
          console.log('user deleted');
        }).catch((error) => {
          console.log(error);
        });
      })
      // this.props.history.push('/register/p1');
    }).catch(err => {
      this.setState({
        errorMsg: err.message
      });
    })
  };
  
  handleEmail(ev) {
    this.setState({
      email: ev.target.value
    });
  }
  handlePw(ev) {
    this.setState({
      pw: ev.target.value
    });
  }
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

export default connect(mapStateToProps)(Start);
