import {CREATE_USER_SUCCESS, HANDLE_MENU_SUCCESS} from './../../action/admin/user-action';

const userInitialState = {
  user : {},
  offMenu: false,
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {...state, user:action.user}
    case HANDLE_MENU_SUCCESS:
      return {...state, offMenu: action}
    default:
      return state
  }
}

export default userReducer