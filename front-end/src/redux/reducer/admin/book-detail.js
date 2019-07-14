import {GET_BOOK_DETAIL_SUCCESS, GET_CHAPTER_SUCCESS} from './../../action/admin/book-actions';

const bookInitialState = {
  bookData: {},
  chapterData: {}
}

const bookDetail = (state = bookInitialState, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL_SUCCESS:
      return {...state,bookData:action.bookDetail}
      case GET_CHAPTER_SUCCESS:
      return {...state,chapterData:action.chapter}
    default:
      return state
  }
}

export default bookDetail