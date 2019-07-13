import {GET_LIST_BOOKS_SUCCESS, GET_LIST_BOOKS_ERROR} from './../../action/admin/book-actions';

const bookInitialState = {
  bookData: {}
}

const listBooks = (state = bookInitialState, action) => {
  switch (action.type) {
    case GET_LIST_BOOKS_SUCCESS:
      return {...state,bookData:action.listBooks}
    case GET_LIST_BOOKS_ERROR:
      return {...state, bookData: action.listBooks}
    default:
      return state
  }
}

export default listBooks