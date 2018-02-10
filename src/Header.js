import './App.css';
import firebase from 'firebase';
import React, { Component } from "react";
import * as actions from './Actions/Actions';
import {connect} from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }
  render() {
    
    // console.log('HEADER', this.props.user.userObj, this.props.user.fbUserData);
    let logOut;
    if (this.props.user.userObj && this.props.user.fbUserData) {
      logOut = <div className="logOutBox">
      <span>Logged in as:</span>
      <span>{this.props.user.fbUserData.contact_details.firstName} {this.props.user.fbUserData.contact_details.lastName} </span>
      <div className="logOutBtnDiv" >
      <button className="btn btn-main" onClick={this.handleLogOutClick} >SIGN OUT</button>
      </div>  
    </div>
    } else {
      logOut = <span></span>
    }
    return (
      <header className="App-header">
        <div className="title">
          <span className="titleOne">IT Republic </span>
          <span className="titleTwo">portal</span>
        </div>
        {logOut}
      </header>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleLogOutClick() {
    firebase.auth().signOut().then( () => {
      console.log('Logged out');
      this.props.dispatch(actions.actionUpdateUserObj(null));
    }).catch( (error) => {
      console.log(error);
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

export default connect(mapStateToProps)(Header);
