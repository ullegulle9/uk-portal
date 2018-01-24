import React, { Component } from 'react';
import '../App.css';
// import RegisterOne from './RegisterPartOne.js';
// import RegisterTwo from './RegisterPartTwo.js';
// import RegisterThree from './RegisterPartThree.js';
// import RegisterFour from './RegisterPartFour.js';
// import RegisterFive from './RegisterPartFive.js';
import Redirect from 'react-router-dom/Redirect';
import Start from '../Start';
import {connect} from 'react-redux';

class UserIFStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'registerOne',
      regData1: {},
      regData2: {},
      regData3: {},
      regData4: {}
    }
  }
  render() {
    return (
      <div className="navBar">
        <span>Loggedin</span>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.user.userObj);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(UserIFStart);