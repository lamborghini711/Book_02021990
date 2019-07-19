import {CREATE_BOOK_SUCCESS, UPDATE_BOOK_SUCCESS} from './../../action/admin/create-book-action';

const bookInitialState = {
  createBook : {},
  updateBook: {}
}

const createBook = (state = bookInitialState, action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
      return {...state,createBook:action.createBook}
    case UPDATE_BOOK_SUCCESS:
      return {...state,updateBook:action.updateBook}
    default:
      return state
  }
}

export default createBook