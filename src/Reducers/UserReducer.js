// import { User } from "firebase";

const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USEROBJ': 
    console.log('reducer');
    state = {...state, userObj: action.payload}
    break;
    default: 
    state = Object.assign({}, state);
  }
  return state;
}

const initialState = {
  userObj: null
};

export default UserReducer;