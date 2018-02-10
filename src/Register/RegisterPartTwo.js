import React, { Component } from 'react';
import '../App.css';
import Dropdown from '../BasicComponents/Dropdown.js';
// import Select from './BasicComponents/Select.js';
import {connect} from 'react-redux';
import * as actions from '../Actions/Actions';
import firebase from 'firebase';


class RegisterTwo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateOptionsBranch = this.updateOptionsBranch.bind(this);
    this.updateOptionsRoles = this.updateOptionsRoles.bind(this);
    this.updateOptionsTechniques = this.updateOptionsTechniques.bind(this);
    this.updateOptionsLanguages = this.updateOptionsLanguages.bind(this);
    this.updateOptionsApplications = this.updateOptionsApplications.bind(this);
    this.updateOptionsDatabase = this.updateOptionsDatabase.bind(this);
    this.updateCheckedBranch = this.updateCheckedBranch.bind(this);
    this.updateCheckedRoles = this.updateCheckedRoles.bind(this);
    this.updateCheckedTechniques = this.updateCheckedTechniques.bind(this);
    this.updateCheckedLanguages = this.updateCheckedLanguages.bind(this);
    this.updateCheckedApplications = this.updateCheckedApplications.bind(this);
    this.updateCheckedDatabase = this.updateCheckedDatabase.bind(this);
    this.handleCVUpload = this.handleCVUpload.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.handleBio = this.handleBio.bind(this);

    this.state = {
      optionsBranch: ['Telecom', 'Automative', 'Pharmasuiticals', 'Finance', 'Logistics', 'Industrial', 'Security'],
      optionsRoles: ['Project leader', 'Scrum master', 'Developer'],
      optionsTechniques: ['.NET', 'Angular.js', 'MVC', 'AJAX', 'jQuery', 'LINQ', 'WCF', 'WPF', 'Silverlight', 'React.js', 'Vue.js', 'Node.js', 'Express', 'MongoDb', 'Mongoose'],
      optionsLanguages: ['Javascript', 'C#', 'C++', 'Java', 'Python', 'Ruby', 'PHP'],
      optionsStatus: ['Available', 'Not available'],
      optionsApplications: [],
      optionsDatabase: [],
      checkedBranch: [],
      checkedRoles: [],
      checkedTechniques: [],
      checkedLanguages: [],
      checkedApplications: [],
      checkedDatabase: [],
      bio: '',
      cvUploadTitle: 'Choose a file...',
      avatarUploadTitle: 'Choose a file...',
      cvUploadErr: '',
      avatarUploadErr: ''
    }
  }
  render() {
    return (
      <div className="registerTwo">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 2 - Profile</span>
        </div>
        {/* <div className="flexCenter"> */}
          <div className="r2formContainer">
          <div>
            <div>
              <span>Branch</span>
              <Dropdown updateChecked={this.updateCheckedBranch} title="Branch" options={this.state.optionsBranch} updateOptions={this.updateOptionsRoles}/>
            </div>
            <div>
              <span>Previous roles</span>
              <Dropdown updateChecked={this.updateCheckedRoles} title="Roles" options={this.state.optionsRoles} updateOptions={this.updateOptionsRoles}/>
            </div>
            <div>
              <span>Techniques you can handle</span>
              <Dropdown updateChecked={this.updateCheckedTechniques} title="Techniques" options={this.state.optionsTechniques} updateOptions={this.updateOptionsTechniques}/>
            </div>
            <div>
              <span>Languages you know</span>
              <Dropdown updateChecked={this.updateCheckedLanguages} title="Languages" options={this.state.optionsLanguages} updateOptions={this.updateOptionsLanguages}/>
            </div>
            <div>
              <span>Applications knowlegde</span>
              <Dropdown updateChecked={this.updateCheckedApplications} title="Applications" options={this.state.optionsApplications} updateOptions={this.updateOptionsApplications}/>
            </div>
            <div>
              <span>Database knowlegde</span>
              <Dropdown updateChecked={this.updateCheckedDatabase} title="Database" options={this.state.optionsDatabase} updateOptions={this.updateOptionsDatabase}/>
            </div>
            <div className="bioDiv">
              <span>Bio</span>
              <textarea name="bio" value={this.state.bio} onChange={this.handleBio} ></textarea>
            </div>
            </div>
            <div>
              <div>
              <span>CV Upload</span>
              <div className="uploadDiv">
                <input type="file" className="upload" id="cvUpload" onChange={this.handleCVUpload}/>
                <label htmlFor="cvUpload"> <i className="material-icons">{"file_upload"}</i> {this.state.cvUploadTitle}</label>
              </div>
              <span className="errorMsgUpload">{this.state.cvUploadErr}</span>
              </div>
              <div>
              <span>Profile Picture Upload</span>
              <div className="uploadDiv">
                <input type="file" className="upload" id="avatarUpload" onChange={this.handleAvatarUpload}/>
                <label htmlFor="avatarUpload"> <i className="material-icons">{"file_upload"}</i>{this.state.avatarUploadTitle}</label>
              </div>
              <span className="errorMsgUpload">{this.state.avatarUploadErr}</span>
            </div>
            </div>
            {/* <div></div>
            <div></div> */}
            {/* <Dropdown title="Methods" options={[]}/> */}
          </div>
        {/* </div> */}
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // if (!this.props.user.userObj) {
    //   this.props.history.push('/');
    // }
  }

  handleClick() {
    let obj = {
      branch: this.state.checkedBranch,
      roles: this.state.checkedRoles,
      techniques: this.state.checkedTechniques,
      languages: this.state.checkedLanguages,
      applications: this.state.checkedApplications,
      database: this.state.checkedDatabase,
      bio: this.state.bio,
      cvUploadTitle: this.state.cvUploadTitle,
      avatarUploadTitle: this.state.avatarUploadTitle
    }
    // this.props.updateRegData2(obj);
    // this.props.updateView('registerThree');
    this.props.dispatch(actions.actionUpdateRegisterPartTwo(obj));
    this.props.history.push('/register/p3');
  }

  handleCVUpload(ev) {
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
      let storageRef = firebase.storage().ref(`cvs/${this.props.register.partOne.emailAddress}/` + file.name);
      storageRef.put(file);
      this.setState({
        cvUploadTitle: file.name,
        cvUploadErr: ''
      });
    }
  }

  handleAvatarUpload(ev) {
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
    }
  }

  handleBio(ev) {
    this.setState({
      bio: ev.target.value
    });
  }

  updateStatus(status) {
    this.setState({
      status: status
    });
  }

  updateOptionsBranch(option) {
    let options = this.state.optionsBranch;
    options.push(option);
    this.setState({
      optionsBranch: options
    });
  }

  updateOptionsRoles(option) {
    let options = this.state.optionsRoles;
    options.push(option);
    this.setState({
      optionsRoles: options
    });
  }

  updateOptionsTechniques(option) {
    let options = this.state.optionsTechniques;
    options.push(option);
    this.setState({
      optionsTechniques: options
    });
  }

  updateOptionsLanguages(option) {
    let options = this.state.optionsLanguages;
    options.push(option);
    this.setState({
      optionsLanguages: options
    });
  }

  updateOptionsApplications(option) {
    let options = this.state.optionsApplications;
    options.push(option);
    this.setState({
      optionsApplications: options
    });
  }

  updateOptionsDatabase(option) {
    let options = this.state.optionsDatabase;
    options.push(option);
    this.setState({
      optionsDatabase: options
    });
  }

  updateCheckedBranch(list) {
    this.setState({
      checkedBranch: list
    });
  }

  updateCheckedRoles(list) {
    this.setState({
      checkedRoles: list
    });
  }

  updateCheckedTechniques(list) {
    this.setState({
      checkedTechniques: list
    });
  }

  updateCheckedLanguages(list) {
    this.setState({
      checkedLanguages: list
    });
  }

  updateCheckedApplications(list) {
    this.setState({
      checkedApplications: list
    });
  }

  updateCheckedDatabase(list) {
    this.setState({
      checkedDatabase: list
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(RegisterTwo);