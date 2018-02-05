import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import CategoryBox from './CategoryBox';
import CategoryBoxEdit from './CategoryBoxEdit';
import firebase from 'firebase';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      bioEdit: false,
      cvEdit: false,
      bioText: '',
      cvObj: {},
      avatarObj: {},
      cvUploadTitle: 'Upload new CV...',
      avatarUploadTitle: 'Upload new profile picture...'
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleEditBio = this.toggleEditBio.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.submitBioClick = this.submitBioClick.bind(this);
    this.toggleEditCV = this.toggleEditCV.bind(this);
    this.handleCVUpload = this.handleCVUpload.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
  }
  render() {
    console.log('PROFILE RENDER', this.props.cvObj.title);
    let branchList;
    if (this.props.regData.branch) {
      branchList = this.props.regData.branch.map((x, i) => {
        if (i === this.props.regData.branch.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x}</span>
        }
      });
    } else {
      branchList = <span></span>
    }
    
    let rolesList;
    if (this.props.regData.roles) {
      rolesList = this.props.regData.roles.map((x, i) => {
        if (i === this.props.regData.roles.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      rolesList = <span></span>
    }

    let techniquesList;
    if (this.props.regData.techniques) {
      techniquesList = this.props.regData.techniques.map((x, i) => {
        if (i === this.props.regData.techniques.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      techniquesList = <span></span>
    }

    let languagesList;
    if (this.props.regData.languages) {
      languagesList = this.props.regData.languages.map((x, i) => {
        if (i === this.props.regData.languages.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      languagesList = <span></span>
    }

    let applicationsList;
    if (this.props.regData.applications) {
      applicationsList = this.props.regData.applications.map((x, i) => {
        if (i === this.props.regData.applications.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      applicationsList = <span></span>
    }

    let databaseList;
    if (this.props.regData.database) {
      databaseList = this.props.regData.database.map((x, i) => {
        if (i === this.props.regData.database.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      databaseList = <span></span>
    }
    let view;

    if (!this.state.edit) {
      view = <div className="profileFlex">
      <CategoryBox list={branchList} title={"Branch"} />
      <CategoryBox list={rolesList} title={"Roles"}/>
      <CategoryBox list={techniquesList} title={"Techniques"}/>
      <CategoryBox list={languagesList} title={"Languages"}/>
      <CategoryBox list={applicationsList} title={"Applications"}/>
      <CategoryBox list={databaseList} title={"Database"}/>
    </div>
    } else {
      view = <div className="profileFlex">
        <CategoryBoxEdit list={branchList} title={"Branch"} />
        <CategoryBoxEdit list={rolesList} title={"Roles"}/>
        <CategoryBoxEdit list={techniquesList} title={"Techniques"}/>
        <CategoryBoxEdit list={languagesList} title={"Languages"}/>
        <CategoryBoxEdit list={applicationsList} title={"Applications"}/>
        <CategoryBoxEdit list={databaseList} title={"Database"}/>
      </div>
    }
    let bio;
    if (!this.state.bioEdit) {
      bio = <div className="bioText">
      {this.state.bioText}
    </div>
    } else {
      bio = <div className="bioText">
      <textarea className="" value={this.state.bioText} onChange={this.updateBio} />
      <button className="btn btn-main" onClick={this.submitBioClick} >Submit change</button>
    </div>
    }

    let cvAvatar;
    if (this.state.cvEdit) {
      
      cvAvatar = <div className="editCVAvatar">
        <div>
      <div className="uploadDiv">
        <input type="file" className="upload" id="cvUpload" onChange={this.handleCVUpload}/>
        <label htmlFor="cvUpload"> <i className="material-icons">{"file_upload"}</i> {this.state.cvUploadTitle}</label>
      </div>
      <span className="errorMsgUpload">{this.state.cvUploadErr}</span>
      </div>
      <div>
      <div className="uploadDiv">
        <input type="file" className="upload" id="avatarUpload" onChange={this.handleAvatarUpload}/>
        <label htmlFor="avatarUpload"> <i className="material-icons">{"file_upload"}</i>{this.state.avatarUploadTitle}</label>
      </div>
      <span className="errorMsgUpload">{this.state.avatarUploadErr}</span>
      </div>
      </div>
    
    } else {
      cvAvatar = <div className="bioText">
      <span> CV: {this.props.cvObj.title}</span>
      <img src={this.props.avatarObj.downloadUrl} alt="" className="profilePic"/>
    </div>
    }
    
    return (
      <div className="profileMain">
        <div className="profileBox">
          <div className="topRow">
            <span>Profile</span>
              <button className="iconBtn inconBtnWht">
                <i className="material-icons" onClick={this.toggleEdit} >{"edit"}</i>
              </button>
            </div>
          {view}
        </div>
        <div className="flex">
          <div className="profileBox profileBoxBio">
            <div className="topRow">
              <span>Bio</span>
              <button className="iconBtn inconBtnWht">
              <i className="material-icons" onClick={this.toggleEditBio} >{"edit"}</i>
              </button>
            </div>
            {bio}
          </div>
          <div className="profileBox profileBoxBio">
            <div className="topRow">
              <span>CV & Profile picture</span>
              <button className="iconBtn inconBtnWht">
              <i className="material-icons" onClick={this.toggleEditCV} >{"edit"}</i>
              </button>
            </div>
            {cvAvatar}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      bioText: this.props.regData.bio
    })
  }

  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({
      edit: edit
    })
  }

  toggleEditBio(ev) {
    let edit = !this.state.bioEdit;
    this.setState({
      bioEdit: edit
    })
  }

  toggleEditCV() {
    let edit = !this.state.cvEdit;
    this.setState({
      cvEdit: edit
    });
  }

  updateBio(ev) {
    this.setState({
      bioText: ev.target.value
    });
  }

  submitBioClick(ev) {
    console.log(this.state.bioText);
    let uid = this.props.user.userObj.uid;
    firebase.database().ref(`users/${uid}/profile/` ).update({
      bio: this.state.bioText
    });
    this.setState({
      bioEdit: false
    });
  }

  handleCVUpload(ev) {
    let uid = this.props.user.userObj.uid;
    let file = ev.target.files[0];
    if (file.size > 15728640) {
      this.setState({
        cvUploadErr: 'File size too big! Max size 15MB'
      });
    } else if (file.type !== 'application/pdf' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.type !== 'application/vnd.oasis.opendocument.text' && file.type !== 'application/msword') {
      this.setState({
        cvUploadErr: 'File format not supported! Supported formats are .pdf, .odt, .docx and .doc'
      });
    } else {
      console.log(this.props.user);
      let storageRef = firebase.storage().ref(`cvs/${this.props.user.fbUserData.contact_details.emailAddress}/` + file.name);
      storageRef.put(file);
      this.setState({
        cvUploadTitle: file.name,
        cvUploadErr: ''
      });
      let fb = firebase.database();
      fb.ref(`users/${uid}/profile/`)
      .update({
        cvUploadTitle: file.name
      });
      let edit = !this.state.cvEdit;
      this.setState({
        cvEdit: edit
      });
    }
  }

  handleAvatarUpload(ev) {
    let uid = this.props.user.userObj.uid;
    let file = ev.target.files[0];
    console.log(file.type);
    if (file.size > 3145728) {
      this.setState({
        avatarUploadErr: 'File size too big! Max size 3MB'
      });
    } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      this.setState({
        avatarUploadErr: 'File format not supported! Supported formats are .png and .jpg/.jpeg'
      });
    } else {
      let storageRef = firebase.storage().ref(`avatars/${this.props.register.partOne.emailAddress}/` + file.name);
      storageRef.put(file);
        this.setState({
        avatarUploadTitle: file.name,
        avatarUploadErr: ''
      });
      let fb = firebase.database();
      fb.ref(`users/${uid}/profile/`)
      .update({
        avatarUploadTitle: file.name
      });
      let edit = !this.state.cvEdit;
      this.setState({
        cvEdit: edit
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(Profile);