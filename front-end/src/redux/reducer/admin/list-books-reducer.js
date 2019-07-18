import {GET_LIST_BOOKS_SUCCESS, 
  GET_LIST_BOOKS_HOT_SUCCESS, 
  GET_LIST_BOOKS_APPOINT_SUCCESS, 
  GET_LIST_TOPIC_SUCCESS,
  GET_BOOK_SEARCH_SUCCESS,
} from './../../action/admin/book-actions';

const bookInitialState = {
  bookData: {},
  bookHotData: {},
  bookAppointData:{},
  listTopic:{},
  bookSearch:{},
}

const listBooks = (state = bookInitialState, action) => {
  switch (action.type) {
    case GET_LIST_BOOKS_SUCCESS:
      return {...state,bookData:action.listBooks}
    case GET_LIST_BOOKS_HOT_SUCCESS:
      return {...state, bookHotData: action.listBooksHot}
    case GET_LIST_BOOKS_APPOINT_SUCCESS:
      return {...state, bookAppointData: action.listBooksAppoint}
    case GET_LIST_TOPIC_SUCCESS:
      return {...state, listTopic: action.listTopic}
    case GET_BOOK_SEARCH_SUCCESS:
      return {...state, bookSearch: action.bookSearch}
    
      
    default:
      return state
  }
}

export default listBooks