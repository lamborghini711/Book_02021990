import { combineReducers } from 'redux';
import listBooks from './admin/list-books-reducer';
import bookDetail from './admin/book-detail';
import createBook from './admin/create-book';
import userReducer from './admin/user-reducer';


const rootReducer = combineReducers({
  listBooks,
  bookDetail,
  createBook,
  userReducer
});

export default rootReducer