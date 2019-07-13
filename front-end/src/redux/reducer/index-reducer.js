import { combineReducers } from 'redux';
import listBooks from './admin/list-books-reducer';

const rootReducer = combineReducers({
  listBooks
});

export default rootReducer