import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

class CategoryBox extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="items">
        <span>{this.props.title}</span>
        <div>
        {this.props.list}
        </div>
      </div> 
    );
  }

  componentDidMount() {
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(CategoryBox);




