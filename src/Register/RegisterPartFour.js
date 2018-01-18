import React, { Component } from 'react';
import '../App.css';
// import Select from './BasicComponents/Select.js';
import PartOneSummary from './PartOneSummary';
import PartTwoSummary from './PartTwoSummary';
import PartThreeSummary from './PartThreeSummary';

class RegisterFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regData1: {},
      regData2: {},
      regData3: {},
      hasData: false
    }
    this.nextClick = this.nextClick.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
  }
  render() {
    console.log(this.state.regData1);
    let view;
    if (this.state.hasData) {
      view = 
        <div className="reg4Summary">
          <div>
            <PartOneSummary regData={this.state.regData1}></PartOneSummary>
          </div>
          <div>
            <PartTwoSummary regData={this.state.regData2}></PartTwoSummary>
          </div>
          <div>
            <PartThreeSummary regData={this.state.regData3}></PartThreeSummary>
          </div>
        </div>
    } else {
      view = 
      <div></div>
    }
    return (
      <div className="registerFour">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 4 - Summary</span>
        </div>
        <div className="flexCenter">
           {view}
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.nextClick}>Next</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      regData1: this.props.regData1,
      regData2: this.props.regData2,
      regData3: this.props.regData3
    }, () => {
      this.setState({
        hasData: true
      });
      console.log(this.state.regData1, this.state.regData2, this.state.regData3);
    });
  }

  nextClick() {
    this.props.updateView('registerFive');
  }
}

export default RegisterFour;