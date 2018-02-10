import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render() {
    let list = this.props.list.map((x, i) => {
      if (i === this.props.list.length - 1) {
        return <span key={x}>{x}</span>
      } else {
        return <span key={x}>{x},</span>
      }
    });
    return (
      <div>
      {list}
        <div className="addNewItem">
          <input onChange={this.handleInputChange} value={this.state.input} className="inputText inputText-xsml" type="text" placeholder="Add"/>
          <button className="iconBtn" onClick={this.handleAddClick}>
            <i className="material-icons iconSml">add</i>
          </button>
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
    this.props.update(this.state.input);
    this.setState({
      input: ''
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(EditList);