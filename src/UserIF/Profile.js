import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import CategoryBox from './CategoryBox';
import CategoryBoxEdit from './CategoryBoxEdit';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    console.log(this.props.regData)
    let branchList;
    if (this.props.regData.branch) {
      branchList = this.props.regData.branch.map((x, i) => {
        if (i === this.props.regData.branch.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
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
    if (this.props.regData.techniques) {
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
    if (this.props.regData.techniques) {
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
    if (this.props.regData.techniques) {
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

    if (this.state.edit) {
      view = <div className="profileFlex">
      <CategoryBox list={branchList} title={"Branch"} />
      <CategoryBox list={rolesList} title={"Roles"}/>
      <CategoryBox list={techniquesList} title={"Teqhniques"}/>
      <CategoryBox list={languagesList} title={"Languages"}/>
      <CategoryBox list={applicationsList} title={"Applications"}/>
      <CategoryBox list={databaseList} title={"Database"}/>
    </div>
    } else {
      view = <div className="profileFlex">
        <CategoryBoxEdit list={branchList} title={"Branch"} />
        <CategoryBoxEdit list={rolesList} title={"Roles"}/>
        <CategoryBoxEdit list={techniquesList} title={"Teqhniques"}/>
        <CategoryBoxEdit list={languagesList} title={"Languages"}/>
        <CategoryBoxEdit list={applicationsList} title={"Applications"}/>
        <CategoryBoxEdit list={databaseList} title={"Database"}/>
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
              <div className="bioText">
                {this.props.regData.bio}
              </div>
            </div>
            <div className="profileBox profileBoxBio">
          <div className="topRow">
            <span>CV</span>
            <button className="iconBtn inconBtnWht">
            <i className="material-icons" onClick={this.toggleEditBio} >{"edit"}</i>
            </button>
          </div>
              <div className="bioText">
                {this.props.regData.bio}
              </div>
            </div>
        </div>
      </div>
    );
  }

  editClick(ev) {
    this.props.p.history.push('/register/p2');
  }

  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({
      edit: edit
    })
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(Profile);