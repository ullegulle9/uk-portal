const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USEROBJ': 
    state = {...state, userObj: action.payload}
    break;
    case 'UPDATE_FBUSERDATA':
    state = {...state, fbUserData: action.payload}
    break;
    default: 
    state = Object.assign({}, state);
  }
  return state;
}

const initialState = {
  userObj: null,
  fbUserData: null
};

export default UserReducer;