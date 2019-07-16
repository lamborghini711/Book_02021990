import { all } from 'redux-saga/effects';
import listBooks from './admin/book-actions';
import createBook from './admin/create-book-action';
import user from './admin/user-action'

export default function* watcherSaga() {
  yield all([
    ...listBooks,
    ...createBook,
    ...user
  ])
}
