import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Actions/Actions';
import { bindActionCreators } from 'redux';

class RegisterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      emailCopy: '',
      pw: '',
      pwCopy: '',
      city: '',
      phoneNumber: '',
      classNameEmail: 'inputText',
      classNamePw: 'inputText'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleDateOfBirth = this.handleDateOfBirth.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleEmailCopy = this.handleEmailCopy.bind(this);
    this.handlePw = this.handlePw.bind(this);
    this.handlePwCopy = this.handlePwCopy.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }
  render() {
    console.log(this.props);
    return (
      <div className="registerOne">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 1 - Contact details</span>
        </div>
        <div className="flexCenter">
          <div className="formContainer">
            <div>
              <input type="text" name="firstname" placeholder="First name" className="inputText" value={this.state.firstName} onChange={this.handleFirstName}/>
              <input type="text" name="lastname" placeholder="Last name" className="inputText" value={this.state.lastName} onChange={this.handleLastName}/>
            </div>
            <div>
              <input type="text" name="date-of-birth" placeholder="Date of birth yyyy-mm-dd" className="inputText" value={this.state.dateOfBirth} onChange={this.handleDateOfBirth}/>
            </div>
            <div>
              <input type="email" name="email" placeholder="Email address" className="inputText" value={this.state.email} onChange={this.handleEmail}/>
            </div>
            <div>
              <input type="email" name="emailCopy" placeholder="Repeat email address" className={this.state.classNameEmail} value={this.state.emailCopy} onChange={this.handleEmailCopy} />
            </div>
            <div>
              <input type="password" placeholder="Password" className="inputText" value={this.state.pw} onChange={this.handlePw} />
              <input type="password" placeholder="Repeat password" className={this.state.classNamePw} value={this.state.pwCopy} onChange={this.handlePwCopy}/>
            </div>
            <div>
            <input type="text" name="city" placeholder="City" className="inputText" value={this.state.city} onChange={this.handleCity}/>
              <input type="text" name="tph" placeholder="Telephone number" className="inputText" value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/>
            </div>
          </div>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
    let p1 = this.props.register.partOne;
    this.setState({
      firstName: p1.firstName,
      lastName: p1.lastName,
      email: p1.email,
      emailCopy: p1.emailCopy,
      dateOfBirth: p1.dateOfBirth,
      pw: p1.pw,
      pwCopy: p1.pwCopy,
      phoneNumber: p1.phoneNumber,
      city: p1.city
    });
    if (this.props.location.state) {
      let userObj = this.props.location.state.userObj;
      this.setState({
        firstName: userObj.firstName === null ? '' : userObj.firstName,
        lastName: userObj.lastName === null ? '' : userObj.lastName,
        email: userObj.emailAddress === null ? '' : userObj.emailAddress,
        phoneNumber: userObj.phoneNumber === null ? '' : userObj.phoneNumber
      })
    }
  }

  handleClick() {
    console.log(this.props);
    if (this.state.email === this.state.emailCopy && this.state.pw === this.state.pwCopy) {
      let obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        emailCopy: this.state.emailCopy,
        pw: this.state.pw,
        pwCopy: this.state.pwCopy,
        city: this.state.city,
        dateOfBirth: this.state.dateOfBirth
      };
      console.log(obj);
      this.props.dispatch(actions.actionUpdateRegisterPartOne(obj));
      this.props.history.push('/register/p2');
    }
  }

  handleFirstName(ev) {
    this.setState({
      firstName: ev.target.value
    });
  }

  handleLastName(ev) {
    this.setState({
      lastName: ev.target.value
    });
  }

  handleDateOfBirth(ev) {
    this.setState({
      dateOfBirth: ev.target.value
    });
  }

  handleEmail(ev) {
    this.setState({
      email: ev.target.value
    });
  }

  handleEmailCopy(ev) {
    this.setState({
      emailCopy: ev.target.value
    }, () => {
      // console.log('kör')
      if (this.state.email !== this.state.emailCopy) {
        this.setState({
          classNameEmail: 'inputText inputErr'
        });
      } else {
        this.setState({
          classNameEmail: 'inputText'
        });
      }
    });
  }
  handlePw(ev) {
    this.setState({
      pw: ev.target.value
    });
  }
  handlePwCopy(ev) {
    this.setState({
      pwCopy: ev.target.value
    }, () => {
      // console.log('kör')
      if (this.state.pw !== this.state.pwCopy) {
        this.setState({
          classNamePw: 'inputText inputErr'
        });
      } else {
        this.setState({
          classNamePw: 'inputText'
        });
      }
    });
  }
  handleCity(ev) {
    this.setState({
      city: ev.target.value
    });
  }

  handlePhoneNumber(ev) {
    this.setState({
      phoneNumber: ev.target.value
    });
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    register: state.register
  }
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({})
// }

export default connect(mapStateToProps)(RegisterOne);