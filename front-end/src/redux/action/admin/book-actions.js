import {takeLatest, call, put} from 'redux-saga/effects';
import booksModel from '../../model/api-book';

export const GET_LIST_BOOKS = 'GET_LIST_BOOKS';
export const GET_LIST_BOOKS_SUCCESS = 'GET_GET_LIST_BOOKS_SUCCESSLIST_BOOKS';
export const GET_LIST_BOOKS_ERROR = 'GET_LIST_BOOKS_ERROR';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default [
  watcherGetListBooks()
]
function* watcherGetListBooks() {
  yield takeLatest(GET_LIST_BOOKS, workerGetListBooks);
}
function* workerGetListBooks() {
  try{
    const res = yield call(booksModel.getListBooks);
    const listBooks = res;
    // dispatch a success action to the store with the new product
    yield put({type : GET_LIST_BOOKS_SUCCESS, listBooks})
  } catch(err) {
    yield put({type : GET_LIST_BOOKS_ERROR, err})
  }
}