import {CREATE_BOOK_SUCCESS} from './../../action/admin/create-book-action';

const bookInitialState = {
  createBook : {}
}

const createBook = (state = bookInitialState, action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
      return {...state,createBook:action.createBook}
    default:
      return state
  }
}

export default createBook