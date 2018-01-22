import { User } from "firebase";

const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USEROBJ': 
    console.log('reducer');
    state = {...state, userObj: action.payload}
    break;
  }
  return state;
}

const initialState = {
  userObj: {
    emailAddress: 'allez@mail.com'
  }
};

export default UserReducer;