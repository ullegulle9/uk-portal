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
import * as actions from '../Actions/Actions';

class UserIFStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Contact details', 'Profile', 'Area of interest'],
      view: 'Contact details',
      user: null,
      cvObj: {},
      avatarObj: {}
    }
    this.updateView = this.updateView.bind(this);
    this.checkIfSignedIn = this.checkIfSignedIn.bind(this);
    this.getCV = this.getCV.bind(this);
    this.getAvatar = this.getAvatar.bind(this);
  }
  render() {
    let navBar;
    let view;
    if (!this.props.user.userObj || !this.state.user) {
      navBar = <span></span>
      view = <span></span>
    } else {
      navBar = 
      <div className="navBar">
        <div className="navBarRight">
          <img src={this.state.avatarObj.downloadUrl} alt="" className="profilePic"/>
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
        view = <ContactDetails userProp={this.state.user}  />
        break;
        case 'Profile':
        view = <Profile regData={this.state.user.profile} cvObj={this.state.cvObj} avatarObj={this.state.avatarObj}/>
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
    if (!this.props.user.userObj) {
      this.props.history.push('/');
    } else {
      let fb = firebase.database();
      let uid = this.props.user.userObj.uid;
      console.log(uid);
      fb.ref(`users/${uid}`).on('value', snap => {
        this.setState({
          user: snap.val()
        })
        console.log(snap.val());
        new Promise(res => {
          this.props.dispatch(actions.actionUpdateFbUserData(snap.val()));
          res();
        }).then(() => {
          this.getCV()
          this.getAvatar()
        })
      })
    }
  }

  componentDidUpdate() {
    this.checkIfSignedIn();
  }

  checkIfSignedIn() {
    if (!this.props.user.userObj) {
      this.props.history.push('/');
    }
  }

  getCV() {
    let storage = firebase.storage().ref();
    console.log('getCV', this.props.user.fbUserData.profile.cvUploadTitle);
    let cvRef = storage.child(`cvs/${this.props.user.fbUserData.contact_details.emailAddress}/${this.props.user.fbUserData.profile.cvUploadTitle}`);
    cvRef.getMetadata().then(metaData => {
      console.log(metaData);
    let cvFileObj = {
      title: metaData.name,
      downloadUrl: metaData.downloadURLs[0],
      size: metaData.size,
      hash: metaData.md5Hash
    }
      this.setState({
        cvObj: cvFileObj
      });
    }).catch(err => {
      console.log(err);
    });
  }

  getAvatar() {
    let storage = firebase.storage().ref();
    
    let avatarRef = storage.child(`avatars/${this.props.user.fbUserData.contact_details.emailAddress}/${this.props.user.fbUserData.profile.avatarUploadTitle}`);
    avatarRef.getMetadata().then(metaData => {
      // console.log(metaData);
      let avatarObj = {
        title: metaData.name,
        downloadUrl: metaData.downloadURLs[0],
        size: metaData.size,
        hash: metaData.md5Hash
      }
      
      this.setState({
        avatarObj: avatarObj
      });
    }).catch(err => {
      console.log(err);
    });
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