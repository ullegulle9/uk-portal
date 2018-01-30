import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select';
import Profile from './Profile';
import ContactDetails from './ContactDetails';
import AreaOfInterest from './AreaOfInterest';
import Redirect from 'react-router-dom/Redirect';
import Start from '../Start';
import {connect} from 'react-redux';
import firebase from 'firebase';

class UserIFStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Contact details', 'Profile', 'Area of interest'],
      view: 'Contact details',
      user: null
    }
    this.updateView = this.updateView.bind(this);
  }
  render() {
    console.log('USER', this.state.user);
    let navBar;
    let view;
    if (!this.props.user.userObj || !this.state.user) {
      navBar = <span></span>
      view = <span></span>
    } else {
      navBar = 
      <div className="navBar">
        <div className="navBarRight">
          <img url={this.props.user.userObj.photoUrl} className="profilePic"/>
          <span className="myPageTitle">My page / </span>
          <span className="myPageName">{this.state.user.contact_details.firstName} </span>
          <span className="myPageName">{this.state.user.contact_details.lastName}</span>
        </div>
        <div>
          <Select updateStatus={this.updateView} title={this.state.view} options={this.state.options} />
        </div>
      </div>
      switch(this.state.view) {
        case 'Contact details':
        view = <ContactDetails userProp={this.state.user} />
        break;
        case 'Profile':
        view = <Profile regData={this.state.user.profile}/>
        break;
        case 'Area of interest':
        view = <AreaOfInterest userProp={this.state.user}/>
        break;
        default: 
        view = <ContactDetails userProp={this.state.user}/>
        break;
      }
    }
    
    return (
      <div className="myPage">
        {navBar}
        <div className="myPageMain">
          {view}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.user.userObj);
    if (!this.props.user.userObj) {
      this.props.history.push('/');
    } else {
      let fb = firebase.database();
      let uid = this.props.user.userObj.uid;
      console.log(uid);
      fb.ref('users/' + uid).on('value', snap =>{
        this.setState({
          user: snap.val()
        })
      })
    }
  }

  updateView(view) {
    this.setState({
      view: view
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(UserIFStart);