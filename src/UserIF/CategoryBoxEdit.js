import React, { Component } from 'react';
import '../App.css';
import Select from '../BasicComponents/Select';
import Start from '../Start';
import {connect} from 'react-redux';

class CategoryBoxEdit extends Component {
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
        <div className="addNewItem">
          <input onChange={this.handleInputChange} className="inputText inputText-xsml" type="text" placeholder="Add"/>
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
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(CategoryBoxEdit);




