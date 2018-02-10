import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import firebase from 'firebase';


class ContactDetailsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      tph: '',
      city: ''
    }
    this.submitClick = this.submitClick.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleTph = this.handleTph.bind(this);
    this.handleCity = this.handleCity.bind(this);
  }
  render() {
    return (
      <div className="contactDetailsBox contactDetailsBoxEdit">
      <div className="topRow">
        <span>Contact details</span>
        <button className="iconBtn inconBtnWht">
        <i className="material-icons" onClick={this.toggleEdit} >{"edit"}</i>
        </button>
      </div>
      <div>
        <div>
          <div>
            <span className="summaryTitle" >First name</span>
            <input onChange={this.handleFirstName} className="inputText" value={this.state.firstName} />
          </div>
          <div>
            <span className="summaryTitle" >Last name</span>
            <input onChange={this.handleLastName}  className="inputText" value={this.state.lastName} />
          </div>
        </div>
        <div>
          <div>
            <span className="summaryTitle" >Telephone number</span>
            <input onChange={this.handleTph}  className="inputText" value={this.state.tph}/>
          </div>
          <div>
            <span className="summaryTitle" >City</span>
            <input onChange={this.handleCity}  className="inputText" value={this.state.city}/>
          </div>
        </div>
        <button className="btn btn-main" onClick={this.submitClick} >Submit changes</button>
      </div>
    </div>
    );
  }

  componentDidMount() {
    let path = this.props.user.fbUserData.contact_details;
    this.setState({
      firstName: path.firstName,
      lastName: path.lastName,
      tph: path.phoneNumber,
      city: path.city
    });
  }

  handleFirstName(ev) {
    this.setState({
      firstName: ev.target.value
    });
  }
  handleLastName(ev) {
    this.setState({
      lastName: ev.target.value
    });
  }
  handleTph(ev) {
    this.setState({
      tph: ev.target.value
    });
  }
  handleCity(ev) {
    this.setState({
      city: ev.target.value
    });
  }

  submitClick() {
    let fb = firebase.database();
    let uid = this.props.user.userObj.uid;
    let ref = fb.ref(`users/${uid}/contact_details`);
    ref.update({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.tph,
      city: this.state.city
    });
    this.toggleEdit();
  }

  toggleEdit() {
    this.props.toggleEdit();
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(ContactDetailsEdit);