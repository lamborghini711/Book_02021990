import {takeLatest, call, put} from 'redux-saga/effects';
import booksModel from '../../model/api-book';

export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';

export default [
  watcherCreateBook(),
  watcherUpdateBook(),
]

function* watcherCreateBook() {
  yield takeLatest(CREATE_BOOK, workerCreateBook);
}
function* workerCreateBook(obj) {
  try{
    const res = yield call(booksModel.createBook, obj);
    const createBook = res;
    // dispatch a success action to the store with the new product
    yield put({type : CREATE_BOOK_SUCCESS, createBook})
  } catch(err) {
  }
}

function* watcherUpdateBook() {
  yield takeLatest(UPDATE_BOOK, workerUpdateBook);
}
function* workerUpdateBook(obj) {
  try{
    const res = yield call(booksModel.updateBook, obj);
    const updateBook = res;
    // dispatch a success action to the store with the new product
    yield put({type : UPDATE_BOOK_SUCCESS, updateBook})
  } catch(err) {
  }
}

