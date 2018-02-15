import React, { Component } from 'react';
import '../App.css';
// import Select from './BasicComponents/Select.js';
import PartOneSummary from './PartOneSummary';
import PartTwoSummary from './PartTwoSummary';
import PartThreeSummary from './PartThreeSummary';
import {connect} from 'react-redux';
import * as actions from '../Actions/Actions';

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
    this.updateRegData2 = this.updateRegData2.bind(this);
    this.updateRegData3 = this.updateRegData3.bind(this);
  }
  render() {
    let view;
    if (this.state.hasData) {
      view = 
        <div className="reg4Summary">
          <div>
            <PartOneSummary p={this.props} regData={this.state.regData1}></PartOneSummary>
          </div>
          <div>
            <PartTwoSummary updateRegData={this.updateRegData2} regData={this.state.regData2}></PartTwoSummary>
          </div>
          <div>
            <PartThreeSummary updateRegData={this.updateRegData3} regData={this.state.regData3}></PartThreeSummary>
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
    if (!this.props.user.userObj) {
      this.props.history.push('/');
    }
    this.setState({
      regData1: this.props.register.partOne,
      regData2: this.props.register.partTwo,
      regData3: this.props.register.partThree
    }, () => {
      this.setState({
        hasData: true
      });
    });
  }

  nextClick() {
    this.props.history.push('/register/p5');
  }

  updateRegData2(obj) {
    this.props.dispatch(actions.actionUpdateRegisterPartTwo(obj));
    this.setState({
      regData2: obj
    });
  } 

  updateRegData3(obj) {
    this.props.dispatch(actions.actionUpdateRegisterPartThree(obj));
    this.setState({
      regData3: obj
    });
  } 
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

export default connect(mapStateToProps)(RegisterFour);