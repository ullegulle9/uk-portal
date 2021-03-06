// USER

export const actionUpdateUserObj = (obj) => {
  return {
    type: 'UPDATE_USEROBJ',
    payload: obj
  }
}

export const actionUpdateFbUserData = (obj) => {
  return {
    type: 'UPDATE_FBUSERDATA',
    payload: obj
  }
}


// REGISTER

export const actionUpdateRegisterPartOne = (obj) => {
  return {
    type: 'UPDATE_PARTONE',
    payload: obj
  }
}

export const actionUpdateRegisterPartTwo = (obj) => {
  return {
    type: 'UPDATE_PARTTWO',
    payload: obj
  }
}

export const actionUpdateRegisterPartThree = (obj) => {
  return {
    type: 'UPDATE_PARTTHREE',
    payload: obj
  }
}

export const actionUpdateRegisterEdit = (bool) => {
  return {
    type: 'UPDATE_EDIT',
    payload: bool
  }
}





