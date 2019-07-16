import {takeLatest, call, put} from 'redux-saga/effects';
import booksModel from '../../model/api-book';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const HANDLE_MENU = 'HANDLE_MENU';
export const HANDLE_MENU_SUCCESS = 'HANDLE_MENU_SUCCESS';



export default [
  watcherCreateUser(),
  watchMenu(),
]

function* watcherCreateUser() {
  yield takeLatest(CREATE_USER, workerCreateUser);
}

function* workerCreateUser(filter) {
  try{
    const res = yield call(booksModel.createUser, filter);
    const user = res;
    // dispatch a success action to the store with the new product
    yield put({type : CREATE_USER_SUCCESS, user})
  } catch(err) {
    yield put({type : CREATE_USER_ERROR, err})
  }
}

function* watchMenu() {
  yield takeLatest(HANDLE_MENU, workerMenu);
}
function* workerMenu(data) {
  try{
    yield put({type : HANDLE_MENU_SUCCESS, data})
  } catch(err) {
  }
}