const registerReducer = (state=initialState, action) => {
  
  switch(action.type) {
    case 'UPDATE_PARTONE': 
    state = {...state, partOne: action.payload}
    break;
    case 'UPDATE_PARTTWO': 
    state = {...state, partTwo: action.payload}
    break;
    case 'UPDATE_PARTTHREE': 
    state = {...state, partThree: action.payload}
    break;
    case 'UPDATE_EDIT': 
    state = {...state, edit: action.payload}
    break;
    default: 
    state = Object.assign({}, state);
  }
  return state;
}

const initialState = {
  partOne: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    emailCopy: '',
    pw: '',
    pwCopy: '',
    city: '',
    phoneNumber: ''
  },
  partTwo: {
    branch: [],
    roles: [],
    techniques: [] ,
    languages: [],
    applications: [],
    database: []
  },
  partThree: {
    branch: [],
    roles: [],
    techniques: [] ,
    languages: [],
    applications: [],
    database: [],
    status: '',
    payRollClaims: ''
  },
  edit: false
}

export default registerReducer;