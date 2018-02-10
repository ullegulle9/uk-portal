import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Basic from './Basic';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './Start';
import RegisterOne from './Register/RegisterPartOne.js';
import RegisterTwo from './Register/RegisterPartTwo.js';
import RegisterThree from './Register/RegisterPartThree';
import RegisterFour from './Register/RegisterPartFour';
import RegisterFive from './Register/RegisterPartFive';
import Confirmation from './Register/Confirmation';
import UserIFStart from './UserIF/Start';
import AdminLogin from './AdminIF/AdminLogin';
import AdminPage from './AdminIF/AdminPage';
import UserPage from './AdminIF/UserPage';

import {connect} from 'react-redux';

var config = {
  apiKey: "AIzaSyBrPG4WvLcULXuEprZVumPcKDgu_KXuLZo",
  authDomain: "uk-portal-6c67e.firebaseapp.com",
  databaseURL: "https://uk-portal-6c67e.firebaseio.com",
  projectId: "uk-portal-6c67e",
  storageBucket: "uk-portal-6c67e.appspot.com",
  messagingSenderId: "624790521084"
};

firebase.initializeApp(config);

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'standard',
      userObj: {
        fetch: false
      }
    };
    this.updateUserObj = this.updateUserObj.bind(this);
    // this.googleAuth = this.googleAuth.bind(this);
  }
  render() {
    return (
      <div className="mainContent">
        <Router>
          <Switch>
            <Route path='/' exact render={props => <Start {...props} />}></Route>
            <Route path='/register' exact render={props => <Basic {...props} />}></Route>
              <Route path='/register/p1' exact render={props =>  <RegisterOne {...props} />}></Route>
              <Route path='/register/p2' exact render={props =>  <RegisterTwo {...props} />}></Route>
              <Route path='/register/p3' exact render={props =>  <RegisterThree {...props} />}></Route>
              <Route path='/register/p4' exact render={props =>  <RegisterFour {...props} />}></Route>
              <Route path='/register/p5' exact render={props =>  <RegisterFive {...props} />}></Route>
              <Route path='/register/cl' exact render={props =>  <Confirmation {...props} />}></Route>
            <Route path='/my-page' exact render={props =>  <UserIFStart {...props} />}></Route>
            <Route path='/admin' exact render={props =>  <AdminLogin {...props} />}></Route>
              <Route path='/admin/user/:id' exact render={props =>  <UserPage {...props} />}></Route>
              <Route path='/admin/start' exact render={props =>  <AdminPage {...props} />}></Route>
          </Switch>
        </Router>
      </div>
    );
  }

  componentDidMount() {
  }

  updateUserObj(obj) {
    this.setState({
      userObj: obj
    });
  }

  
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(MainContent);