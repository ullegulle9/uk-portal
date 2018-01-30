import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select';
import Start from '../Start';
import {connect} from 'react-redux';

class AreaOfInterest extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <span>Area of interest</span>
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

export default connect(mapStateToProps)(AreaOfInterest);