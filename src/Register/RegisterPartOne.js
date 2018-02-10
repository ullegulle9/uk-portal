import React, { Component } from 'react';
import '../App.css';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Actions/Actions';
import firebase from 'firebase';
// import { bindActionCreators } from 'redux';

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
      classNamePw: 'inputText',
      classNamePhone: 'inputText',
      classNameNameCity: 'inputText',
      classNameDateOfBirth: 'inputText',
      errorMsg: '',
      readOnly: false,
      classNameMsg: 'errorMsgPartOne'
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
    this.registerEmailPw = this.registerEmailPw.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    // this.checkEmailDb = this.checkEmailDb.bind(this);
  }
  render() {
    // console.log(this.state.readOnly);
    let emailInput;
    let emailCopyInput;
    if (this.state.readOnly) {
      emailInput = <input type="email" readOnly name="email" placeholder="Email address" className={this.state.classNameEmail} value={this.state.email} onChange={this.handleEmail}/>
      emailCopyInput = <input type="email" readOnly name="emailCopy" placeholder="Repeat email address" className={this.state.classNameEmail} value={this.state.emailCopy} onChange={this.handleEmailCopy} />
    } else {
      emailInput = <input type="email" name="email" placeholder="Email address" className={this.state.classNameEmail} value={this.state.email} onChange={this.handleEmail}/>
      emailCopyInput = <input type="email" name="emailCopy" placeholder="Repeat email address" className={this.state.classNameEmail} value={this.state.emailCopy} onChange={this.handleEmailCopy} />
    }
    return (
      <div className="registerOne">
        <div className="regTitleCont">
          <span className="regTitle">Register</span>
          <span className="regSectionTitle">Stage 1 - Contact details</span>
        </div>
        <div className="flexCenter">
          <div className="formContainer">
            <div>
              <input type="text" name="firstname" placeholder="First name" className={this.state.classNameNameCity} value={this.state.firstName} onChange={this.handleFirstName}/>
              <input type="text" name="lastname" placeholder="Last name" className={this.state.classNameNameCity} value={this.state.lastName} onChange={this.handleLastName}/>
            </div>
            <div>
              <input type="text" name="date-of-birth" placeholder="Date of birth YYYYMMDD" className={this.state.classNameDateOfBirth} value={this.state.dateOfBirth} onChange={this.handleDateOfBirth}/>
            </div>
            <div>
              {emailInput}
            </div>
            <div>
              {emailCopyInput}
            </div>
            <div>
              <input type="password" placeholder="Password" className={this.state.classNamePw} value={this.state.pw} onChange={this.handlePw} />
              <input type="password" placeholder="Repeat password" className={this.state.classNamePw} value={this.state.pwCopy} onChange={this.handlePwCopy}/>
            </div>
            <div>
            <input type="text" name="city" placeholder="City" className={this.state.classNameNameCity} value={this.state.city} onChange={this.handleCity}/>
              <input type="text" name="tph" placeholder="Telephone number" className={this.state.classNamePhone} value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/>
            </div>
            <div className={this.state.classNameMsg}>{this.state.errorMsg}</div>
          </div>
        </div>
        <div className="flexRight">
          <button className="btn btn-secondary" onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let p1 = this.props.register.partOne;
    this.setState({
      firstName: p1.firstName,
      lastName: p1.lastName,
      email: p1.emailAddress,
      emailCopy: p1.emailCopy,
      dateOfBirth: p1.dateOfBirth,
      pw: p1.pw,
      pwCopy: p1.pwCopy,
      phoneNumber: p1.phoneNumber,
      city: p1.city
    }, () => {
      if (this.props.user.userObj && !this.props.register.edit) {
        // console.log(this.props.user.userObj);
        let userObj = this.props.user.userObj;
        if ( userObj.firstName !== undefined && userObj.lastName !== undefined ) {
          // console.log('inthere')
          this.setState({
            firstName: userObj.firstName === null ? '' : userObj.firstName,
            lastName: userObj.lastName === null ? '' : userObj.lastName,
            email: userObj.emailAddress === null ? '' : userObj.emailAddress,
            emailCopy: userObj.emailAddress === null ? '' : userObj.emailAddress,
            readOnly: true,
            errorMsg: 'Email address is connected to your Facebook/Google account and may not be changed. If you wish to register another email address, please return to home and sign up without using Facebook/Google.'
          });
        } 
      }
    });
    
  }

  handleClick() {
    if (this.props.register.edit) {
      let obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.email,
        emailCopy: this.state.emailCopy,
        pw: this.state.pw,
        pwCopy: this.state.pwCopy,
        city: this.state.city,
        dateOfBirth: this.state.dateOfBirth,
        phoneNumber: this.state.phoneNumber
      };
      this.props.dispatch(actions.actionUpdateRegisterPartOne(obj));
      this.props.history.push('/register/p4');
    }
    else if (this.checkInputs()) {
      if (!this.props.user.userObj) {
        this.registerEmailPw();
      } else {
        new Promise( (res, rej) => {
          let fb = firebase.database();
          fb.ref().child('users').orderByChild('contact_details/emailAddress')
          .equalTo(this.state.email)
          .once('value', snap => {
            let data = snap.val();
            if (!data) {
              res('Doesnt exist');
            } else {
              rej();
            }
          })
        }).then( (res) => {;
          let obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.email,
            emailCopy: this.state.emailCopy,
            pw: this.state.pw,
            pwCopy: this.state.pwCopy,
            city: this.state.city,
            dateOfBirth: this.state.dateOfBirth,
            phoneNumber: this.state.phoneNumber
          };
            this.props.dispatch(actions.actionUpdateRegisterPartOne(obj));
            this.props.history.push('/register/p2');
          
        }).catch( () => {
          // console.log('catch');
          this.setState({
            classNameEmail: 'inputText inputErr',
            errorMsg: 'This email address has already been registered. Please sign in to proceed.'
          });
        });
      }
    }
  }


  registerEmailPw() {
    if (this.state.email !== this.state.emailCopy) {
      this.setState({
        classNameEmail: 'inputText inputErr',
        classNamePw: 'inputText'
      });
    } else if (this.state.pw !== this.state.pwCopy) {
      this.setState({
        classNamePw: 'inputText inputErr',
        classNameEmail: 'inputText'
      })
    } else {
      let self = this;
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pw)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode, errorMessage);
      if (errorCode === 'auth/weak-password') {
        self.setState({
          classNamePw: 'inputText inputErr',
          errorMsg: errorMessage
        });
      } else if (errorCode === 'auth/email-already-in-use') {
        self.setState({
          classNameEmail: 'inputText inputErr',
          classNamePw: 'inputText',
          errorMsg: errorMessage
        });
      }
      return false;
    }).then( (res) => {
      if (res) {
        this.setState({
          classNamePw: 'inputText',
          classNameEmail: 'inputText',
          errorMsg: ''
        });
        this.props.dispatch(actions.actionUpdateUserObj(res));
        let obj = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAddress: this.state.email,
          emailCopy: this.state.emailCopy,
          pw: this.state.pw,
          pwCopy: this.state.pwCopy,
          city: this.state.city,
          dateOfBirth: this.state.dateOfBirth,
          phoneNumber: this.state.phoneNumber
        };
        this.props.dispatch(actions.actionUpdateRegisterPartOne(obj));
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {
          this.setState({
            errorMsg: 'A verification email has been sent to you!',
            classNameMsg: 'alertPartOne'
          }, () => {
            setTimeout(() => {
              this.props.history.push('/register/p2');
            }, 5000)
          })
        }).catch((error) => {
          this.setState({
            errorMsg: error
          });
        });
        
      }
    });
    }
  }

  checkInputs() {
    if (this.state.firstName.length < 1 || this.state.lastName.length < 1 || this.state.city.length < 1 ) {
      // console.log('false');
      this.setState({
        classNameNameCity: 'inputText inputErr',
        classNamePhone: 'inputText',
        classNameDateOfBirth: 'inputText'
      });
      return false;
    } else if (this.state.dateOfBirth.length !== 8 || isNaN(Number(this.state.dateOfBirth)) ) {
      // console.log('NaN');
      this.setState({
        classNameNameCity: 'inputText',
        classNamePhone: 'inputText',
        classNameDateOfBirth: 'inputText inputErr'
      });
      return false;
    } else if (this.state.phoneNumber.length < 1 || isNaN(Number(this.state.phoneNumber))) {
      // console.log('phoneNumber');
      this.setState({
        classNameNameCity: 'inputText',
        classNameDateOfBirth: 'inputText',
        classNamePhone: 'inputText inputErr'
      });
      return false;
    } else {
      this.setState({
        classNameNameCity: 'inputText',
        classNameDateOfBirth: 'inputText',
        classNamePhone: 'inputText'
      });
      return true;
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
      // if (this.state.email !== this.state.emailCopy) {
      //   this.setState({
      //     classNameEmail: 'inputText inputErr'
      //   });
      // } else {
      //   this.setState({
      //     classNameEmail: 'inputText'
      //   });
      // }
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
      // if (this.state.pw !== this.state.pwCopy) {
      //   this.setState({
      //     classNamePw: 'inputText inputErr'
      //   });
      // } else {
      //   this.setState({
      //     classNamePw: 'inputText'
      //   });
      // }
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
// this.props.dispatch(actions.actionUpdateRegisterPartOne(obj));
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({})
// }

export default connect(mapStateToProps)(RegisterOne);