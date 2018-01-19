import React, { Component } from 'react';
import '../App.css';

class PartOneSummary extends Component {
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
        <span className="summaryTitle">Contact details</span>
        <div>
          <div className="summaryItems">
            <span>First name</span>
            <div>
            {this.state.regData.firstName}
            </div>
          </div>
          <div className="summaryItems">
            <span>Last name</span>
            <div>
            {this.state.regData.lastName}
            </div>
          </div>
          <div className="summaryItems">
            <span>Email</span>
            <div>
            {this.state.regData.email}
            </div>
          </div>
          <div className="summaryItems">
            <span>Date of birth</span>
            <div>
            {this.state.regData.dateOfBirth}
            </div>
          </div>
          <div className="summaryItems">
            <span>Contact telephone number</span>
            <div>
            {this.state.regData.phoneNumber}
            </div>
          </div>
          <div className="summaryItems">
            <span>City</span>
            <div>
            {this.state.regData.city}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.regData);
    this.setState({
      regData: this.props.regData
    }, () => {
      console.log(this.state.regData);
    });
  }
}

export default PartOneSummary;