import '../App.css';
import firebase from 'firebase';
import React, { Component } from "react";
import * as actions from '../Actions/Actions';
import {connect} from 'react-redux';
import List from '../Register/List';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_details: {},
      profile: {},
      status: {},
      avatarObj: {},
      cvObj: {}
    }
    this.getAvatar = this.getAvatar.bind(this);
    this.getCV = this.getCV.bind(this);
    // this.adminLogin = this.adminLogin.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePWChange = this.handlePWChange.bind(this);
  }
  render() {
    return (
      <div className="flexCenter">
        <div className="userContainer">
          <div className="topRow">
            <div>
              <img src={this.state.avatarObj.downloadUrl} alt="" className="profilePic" />
              <strong>{this.state.contact_details.firstName} {this.state.contact_details.lastName}</strong>
            </div>
            <div className="contactRight">
              <span>{this.state.contact_details.dateOfBirth}</span>
              <span>{this.state.contact_details.emailAddress}</span>
              <span>{this.state.contact_details.phoneNumber}</span>
              <span>{this.state.contact_details.city}</span>
            </div>
            
          </div>
          <div className="content">
          <div className="section" >
            <div className="summarySection">
              <div className="summaryTop">
                <span className="summaryTitle">Knowledge</span>
              </div>
              <div>
                <div className="summaryItems">
                <span>Branch</span>
                <List list={this.state.profile.branch}/>
                </div>
                <div className="summaryItems">
                <span>Roles</span>
                <List list={this.state.profile.roles}/>
                </div>
                <div className="summaryItems">
                <span>Techniques</span>
                <List list={this.state.profile.techniques}/>
                </div>
                <div className="summaryItems">
                <span>Languages</span>
                <List list={this.state.profile.languages}/>
                </div>
                <div className="summaryItems">
                <span>Applications</span>
                <List list={this.state.profile.applications} />
                </div>
                <div className="summaryItems">
                <span>Database</span>
                <List list={this.state.profile.database}/>
                </div>
              </div>
            </div> 
            </div>
            <div className="section" >
            <div className="summarySection">
              <div className="summaryTop">
                <span className="summaryTitle">Area of interest</span>
              </div>
              <div>
                <div className="summaryItems">
                <span>Branch</span>
                <List list={this.state.status.branch}/>
                </div>
                <div className="summaryItems">
                <span>Roles</span>
                <List list={this.state.status.roles}/>
                </div>
                <div className="summaryItems">
                <span>Techniques</span>
                <List list={this.state.status.techniques}/>
                </div>
                <div className="summaryItems">
                <span>Languages</span>
                <List list={this.state.status.languages}/>
                </div>
                <div className="summaryItems">
                <span>Applications</span>
                <List list={this.state.status.applications} />
                </div>
                <div className="summaryItems">
                <span>Database</span>
                <List list={this.state.status.database}/>
                </div>
                
              </div>
            </div> 
            </div>
            <div className="section noborder">
              
              <div className="summarySection">
                <div className="summaryTop">
                  <span className="summaryTitle">Status and profile</span>
                  <a href={this.state.cvObj.downloadUrl} className="cvUploadIcon" >
                    <button className="cvDownloadBtn">
                    <i className="material-icons">file_download</i> 
                    cv download
                    </button>
                    </a>
                </div>
                <div>
                  <div className="summaryItems">
                    <span>Current status</span>
                    <strong className="status">{this.state.status.status}</strong>
                  </div>
                  <div className="summaryItems">
                    <span>Payroll claims</span>
                    <span className="blk">{this.state.status.payrollClaims}</span>
                  </div>
                  <div className="summaryItems">
                    <span>Bio</span>
                    <span className="blk">{this.state.profile.bio}</span>
                  </div>
                  <div className="summaryItems">
                    
                    
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let uid = this.props.match.params.id;
    let fb = firebase.database();
    fb.ref(`users/${uid}`).once('value').then(snap => {
      let data = snap.val();
      this.setState({
        contact_details: data.contact_details,
        profile: data.profile,
        status: data.status
      }, () => {
        this.getAvatar();
        this.getCV();
      });
    })
  }

  getAvatar() {
    let storage = firebase.storage().ref();
    let avatarRef = storage.child(`avatars/${this.state.contact_details.emailAddress}/${this.state.profile.avatarUploadTitle}`);
    avatarRef.getMetadata().then(metaData => {
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
      console.log('avatarErr', err);
      this.setState({
        avatarObj: {
          downloadUrl: 'https://www.logicprohelp.com/forum/styles/canvas/theme/images/no_avatar.jpg'
        }
      })
    });
  }

  getCV() {
    let storage = firebase.storage().ref();
    let cvRef = storage.child(`cvs/${this.state.contact_details.emailAddress}/${this.state.profile.cvUploadTitle}`);
    cvRef.getMetadata().then(metaData => {
    let cvFileObj = {
      title: metaData.name,
      downloadUrl: metaData.downloadURLs[0],
      size: metaData.size,
      hash: metaData.md5Hash
    }
    console.log(cvFileObj);
    this.setState({
      cvObj: cvFileObj
    });
    }).catch(err => {
      console.log('cvErr', err);
      this.setState({
        cvObj: {
          title: 'No CV uploaded yet'
        }
      })
    });
  }

  // handleEmailChange(ev) {
  //   this.setState({
  //     email: ev.target.value
  //   });
  // }

  // handlePWChange(ev) {
  //   this.setState({
  //     pw: ev.target.value
  //   });
  // }

  // adminLogin() {
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
  //   .then( ( result ) => {
  //     console.log(result);
  //     if (result.uid === 'CosFo1S36UYpN1xmBogZHDJETQo2') {
  //       this.props.dispatch(actions.actionUpdateUserObj(result));
  //       this.props.history.push('admin/start');
  //     } else {
  //       this.setState({
  //         errorMsg: 'not admin'
  //       });
  //       this.props.dispatch(actions.actionUpdateUserObj(null));
  //     }
      
  //     // this.props.history.push('/my-page');
  //   }).catch(error => {
  //     console.log(error);
  //     // let errorMessage = error.message;
  //     // this.setState({
  //     //   errorMsg: errorMessage
  //     // });
  //   });
  // }

  // findAllAvailable() {
  //   let fb = firebase.database();
  //   fb.ref().child('users').orderByChild('status/status')
  //   .equalTo('Available')
  //   .once('value', snap => {
  //     console.log(snap.val());
  //   })
  // }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

/* <div className="summaryItems">
                <span>Bio</span>
                <div>
                {this.state.profile.bio} 
                </div>
                </div> 
                
                <div className="summaryItems">
                <span>Payroll claims</span>
                <div>
                {this.state.status.payrollClaims} 
                </div>
                </div>*/

export default connect(mapStateToProps)(AdminLogin);
