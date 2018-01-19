const registerReducer = (state=initialState, action) => {
  
  switch(action.type) {
    case 'UPDATE_PARTONE': 
    console.log('reducer');
    state = {...state, partOne: action.payload}
    break;
    case 'UPDATE_PARTTWO': 
    state = {...state, partTwo: action.payload}
    break;
    case 'UPDATE_PARTTHREE': 
    state = {...state, partThree: action.payload}
    break;
  }
  return state;
}

let initialState = {
  partOne: {
      firstName: 'Marre',
      lastName: '',
      email: '',
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
    payRollClaims: undefined
  }
}

export default registerReducer;