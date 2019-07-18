import {GET_BOOK_DETAIL_SUCCESS, GET_CHAPTER_SUCCESS, GET_BOOK_DETAIL_CHAPTER_SELECT_SUCCESS} from './../../action/admin/book-actions';

const bookInitialState = {
  bookData: {},
  chapterData: {},
  chapterSelect : {},
}

const bookDetail = (state = bookInitialState, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL_SUCCESS:
      return {...state,bookData:action.bookDetail}
      case GET_CHAPTER_SUCCESS:
      return {...state,chapterData:action.chapter}
      case GET_BOOK_DETAIL_CHAPTER_SELECT_SUCCESS:
      return {...state, chapterSelect: action.chapter}
    default:
      return state
  }
}

export default bookDetail