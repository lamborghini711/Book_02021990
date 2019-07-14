import {UPLOAD_IMG_SUCCESS} from './../../action/admin/book-actions';

const bookInitialState = {
  img : {}
}

const bookDetail = (state = bookInitialState, action) => {
  switch (action.type) {
    case UPLOAD_IMG_SUCCESS:
      return {...state,img:action.image}
     
    default:
      return state
  }
}

export default bookDetail