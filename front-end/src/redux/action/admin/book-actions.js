import {takeLatest, call, put} from 'redux-saga/effects';
import booksModel from '../../model/api-book';

export const GET_LIST_BOOKS = 'GET_LIST_BOOKS';
export const GET_LIST_BOOKS_SUCCESS = 'GET_LIST_BOOKS_SUCCESS';
export const GET_LIST_BOOKS_HOT = 'GET_LIST_BOOKS_HOT';
export const GET_LIST_BOOKS_HOT_SUCCESS = 'GET_LIST_BOOKS_HOT_SUCCESS';
export const GET_LIST_BOOKS_APPOINT = 'GET_LIST_BOOKS_APPOINT';
export const GET_LIST_BOOKS_APPOINT_SUCCESS = 'GET_LIST_BOOKS_APPOINT_SUCCESS';
export const GET_BOOK_DETAIL = 'GET_BOOK_DETAIL';
export const GET_BOOK_DETAIL_SUCCESS = 'GET_BOOK_DETAIL_SUCCESS';
export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_CHAPTER_SUCCESS = 'GET_CHAPTER_SUCCESS';
export const GET_LIST_TOPIC = 'GET_LIST_TOPIC';
export const GET_LIST_TOPIC_SUCCESS = 'GET_LIST_TOPIC_SUCCESS';



// watcher saga: watches for actions dispatched to the store, starts worker saga
export default [
  watcherGetListBooks(),
  watcherGetListBooksHot(),
  watcherGetListBooksAppoint(),
  watcherGetBookDetail(),
  watcherGetChapter(),
  watcherListTopic(),
]

function* watcherGetListBooks() {
  yield takeLatest(GET_LIST_BOOKS, workerGetListBooks);
}
function* workerGetListBooks(filter) {
  try{
    const res = yield call(booksModel.getListBooks, filter);
    const listBooks = res;
    yield put({type : GET_LIST_BOOKS_SUCCESS, listBooks})
  } catch(err) {
    // yield put({type : GET_LIST_BOOKS_ERROR, err})
  }
}

function* watcherGetListBooksHot() {
  yield takeLatest(GET_LIST_BOOKS_HOT, workerGetListBooksHot);
}
function* workerGetListBooksHot(filter) {
  try{
    const res = yield call(booksModel.getListBooks, filter);
    const listBooksHot = res;
    yield put({type : GET_LIST_BOOKS_HOT_SUCCESS, listBooksHot})
  } catch(err) {
  }
}

function* watcherGetListBooksAppoint() {
  yield takeLatest(GET_LIST_BOOKS_APPOINT, workerGetListBooksAppoint);
}
function* workerGetListBooksAppoint(filter) {
  try{
    const res = yield call(booksModel.getListBooks, filter);
    const listBooksAppoint = res;
    yield put({type : GET_LIST_BOOKS_APPOINT_SUCCESS, listBooksAppoint})
  } catch(err) {
  }
}

function* watcherGetBookDetail() {
  yield takeLatest(GET_BOOK_DETAIL, workerGetBookDetail);
}
function* workerGetBookDetail(filter) {
  try{
    const res = yield call(booksModel.getBookDetail, filter);
    const bookDetail = res;
    yield put({type : GET_BOOK_DETAIL_SUCCESS, bookDetail})
  } catch(err) {
  }
}

function* watcherGetChapter() {
  yield takeLatest(GET_CHAPTER, workerGetChapter);
}
function* workerGetChapter(filter) {
  try{
    const res = yield call(booksModel.getChapter, filter);
    const chapter = res;
    yield put({type : GET_CHAPTER_SUCCESS, chapter})
  } catch(err) {
  }
}

function* watcherListTopic() {
  yield takeLatest(GET_LIST_TOPIC, workerListTopic);
}
function* workerListTopic(filter) {
  try{
    const res = yield call(booksModel.getListTopic, filter);
    const listTopic = res;
    yield put({type : GET_LIST_TOPIC_SUCCESS, listTopic})
  } catch(err) {
  }
}
