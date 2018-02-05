import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select';
import Start from '../Start';
import {connect} from 'react-redux';
import firebase from 'firebase';

class CategoryBoxEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  render() {
    return (
      <div className="items">
        <span>{this.props.title}</span>
        <div>
        {this.props.list}
        <div className="addNewItem">
          <input onChange={this.handleInputChange} value={this.state.input} className="inputText inputText-xsml" type="text" placeholder="Add"/>
          <button className="iconBtn" onClick={this.handleAddClick}>
            <i className="material-icons">add</i>
          </button>
        </div>
        </div>
      </div> 
    );
  }

  componentDidMount() {
  }

  handleInputChange(ev) {
    this.setState({
      input: ev.target.value
    });
  }

  handleAddClick() {
    let uid = this.props.user.userObj.uid;
    let fb = firebase.database();
    let path = this.props.title.toLowerCase();
    let arr = this.props.user.fbUserData.profile[path];
    if (arr) {
      arr.push(this.state.input);
      fb.ref(`users/${uid}/profile/${path}`)
      .update(arr);

    } else {
      arr = [];
      arr.push(this.state.input);
      fb.ref(`users/${uid}/profile/${path}`)
      .update(arr);
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(CategoryBoxEdit);




