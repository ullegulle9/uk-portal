import React, { Component } from 'react';
import '../App.css';
import ContactDetailsEdit from './ContactDetailsEdit';
import {connect} from 'react-redux';

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }
  render() {
    let view; 
    
    if (this.state.edit) {
      view = <ContactDetailsEdit toggleEdit={this.toggleEdit} />
    } else {
      view = <div className="contactDetailsBox">
        <div className="topRow">
          <span>Contact details</span>
          <button className="iconBtn inconBtnWht">
          <i className="material-icons" onClick={this.toggleEdit} >{"edit"}</i>
          </button>
        </div>
        <div>
          <div>
            <strong className="name">{this.props.userProp.contact_details.firstName} {this.props.userProp.contact_details.lastName}</strong>
          </div>
          <div>
            <span>{this.props.userProp.contact_details.emailAddress}</span>
          </div>
          <div>
            <span>{this.props.userProp.contact_details.phoneNumber} </span>
          </div>
          <div>
            <span>{this.props.userProp.contact_details.city}</span>
          </div>
          <div>
            <span className="dob">{this.props.userProp.contact_details.dateOfBirth}</span>
          </div>
        </div>
      </div>
    }
    
    return (
      <div className="contactDetailsMain">
        {view}
      </div>
    );
  }

  componentDidMount() {
    // let fb = firebase.database();
    // let uid = this.props.user.userObj.uid;
    // console.log(uid);
    // fb.ref('users/' + uid).on('value', snap =>{
    //   this.setState({
    //     user: snap.val()
    //   })
    // })
  }

  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({
      edit: edit
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(ContactDetails);