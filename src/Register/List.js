import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

class List extends Component {
  render() {
    let list
    if(this.props.list) {
      list = this.props.list.map((x, i) => {
        if (i === this.props.list.length - 1) {
          return <span key={x}>{x}</span>
        } else {
          return <span key={x}>{x},</span>
        }
      });
    } else {
      list = <span></span>
    }
    
    return (
      <div>{list}</div>
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

export default connect(mapStateToProps)(List);