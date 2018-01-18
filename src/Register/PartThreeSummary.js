import React, { Component } from 'react';
import '../App.css';

class PartThreeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regData: {},
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    return (
      <div className="summarySection">
        <span className="summaryTitle">Area of interest</span>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      regData: this.props.regData
    }, () => {
      console.log(this.state.regData);
    });
  }
}

export default PartThreeSummary;