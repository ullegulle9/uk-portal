import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import {connect} from 'react-redux';
// import Select from './BasicComponents/Select.js';

class Confirmation extends Component {
  render() {
    return (
      <div className="confirmationMsg" >
        <div>
          <h2>Thank you for your registration!</h2>
          <span>You will now be redirected to your page.</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/my-page');
    }, 3000)
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(Confirmation);