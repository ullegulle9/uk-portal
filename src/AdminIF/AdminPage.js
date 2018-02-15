import '../App.css';
import firebase from 'firebase';
import React, { Component } from "react";
import {connect} from 'react-redux';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
      errorMsg: '',
      available: []
    }
    this.findAllAvailable = this.findAllAvailable.bind(this);
    this.click = this.click.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
  }
  render() {
    let availList = this.state.available.map(user => {
      return <div key={user.uid} className="resultBox">
      <div className="leftFlex">
      <div>
        <img src="" alt="" className="profilePic-sml" />
      </div>
      <div>
        <strong>{user.data.contact_details.firstName } {user.data.contact_details.lastName }</strong>
      </div>
      <span>{user.data.contact_details.emailAddress }</span>
      </div>
      <div className="rightFlex">
        <div>
          <span>Status: <span className="italic" >{user.data.status.status }</span></span>
        </div>
        <div>
          <button className="iconBtn" onClick={this.click} data-id={user.uid} >
            <i className="material-icons">check_box</i>
          </button>
        </div>
        </div>
      </div>
    })
    return (
      <div>
      <div className="flexCenter">
        <button onClick={this.findAllAvailable} className="btn btn-main">Find all available</button>
        
      </div>
        <div className="resultListContainer" >
          {availList}
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.user.userObj) {
      this.props.history.push('/admin');
    }
  }

  click(ev) {
    let id = ev.target.parentElement.getAttribute('data-id');
    this.props.history.push(`/admin/user/${id}`);
  }

  handleEmailChange(ev) {
    this.setState({
      email: ev.target.value
    });
  }

  handlePWChange(ev) {
    this.setState({
      pw: ev.target.value
    });
  }

  findAllAvailable() {
    let fb = firebase.database();
    fb.ref().child('users').orderByChild('status/status')
    .equalTo('Available')
    .once('value', snap => {
      let data = snap.val();
      let arr = [];
      for (let o in data) {
        let obj = {
          uid: o,
          data: data[o]
        };
        arr.push(obj);
      }
      this.setState({
        available: arr
      });
    })
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

export default connect(mapStateToProps)(AdminPage);
