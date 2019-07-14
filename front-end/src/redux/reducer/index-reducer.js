import { combineReducers } from 'redux';
import listBooks from './admin/list-books-reducer';
import bookDetail from './admin/book-detail';

const rootReducer = combineReducers({
  listBooks,
  bookDetail
});

export default rootReducer