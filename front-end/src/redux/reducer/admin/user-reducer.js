import {CREATE_USER_SUCCESS} from './../../action/admin/user-action';

const userInitialState = {
  user : {}
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {...state, user:action.user}
     
    default:
      return state
  }
}

export default userReducer