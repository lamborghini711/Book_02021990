import { all } from 'redux-saga/effects';
import listBooks from './admin/book-actions';

export default function* watcherSaga() {
  yield all([
    ...listBooks
  ])
}
