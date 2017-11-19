import { put, takeEvery, fork, call } from 'redux-saga/effects';

import {
  GET_ALL_COMMENTS,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  CLEAR_DEFAULT_COMMENTS,
  CLEAR_DEFAULT_COMMENTS_SUCCESS,
  CLEAR_DEFAULT_COMMENTS_FAILURE,
} from '../../actions/actionTypes';

import CommentsApi from '../../api/mockCommentsApi';

const actions = [
  GET_ALL_COMMENTS,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  CLEAR_DEFAULT_COMMENTS,
  CLEAR_DEFAULT_COMMENTS_SUCCESS,
  CLEAR_DEFAULT_COMMENTS_FAILURE,
];

/*
 * We could use here some helper module for make and handle requests
 * For now, we use our mock api module
 */
export function* getAllComments() {
  try {
    const response = yield call(CommentsApi.getAllComments);

    yield put({
      type: GET_ALL_COMMENTS_SUCCESS,
      payload: response,
    });
  } catch (err) {

    yield put({
      type: GET_ALL_COMMENTS_FAILURE,
      payload: err,
    });
  }
}

/*
 * We could use here some helper module for make and handle requests
 * For now, we use our mock api module
 */
export function* addComment({ text, rating }) {
  try {
    const response = yield call(CommentsApi.addComment, text, rating);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (err) {

    yield put({
      type: ADD_COMMENT_FAILURE,
      payload: err,
    });
  }
}

/*
 * We could use here some helper module for make and handle requests
 * For now, we use our mock api module
 */
export function* clearDefaultComments() {
  try {
    const response = yield call(CommentsApi.clearDefaultComments);

    yield put({
      type: CLEAR_DEFAULT_COMMENTS_SUCCESS,
      payload: response,
    });
  } catch (err) {

    yield put({
      type: CLEAR_DEFAULT_COMMENTS_FAILURE,
      payload: err,
    });
  }
}

export function* commentsSaga({ type, payload }:Object) {
  switch (type) {
    case GET_ALL_COMMENTS:
      yield fork(getAllComments);
      break;
    case ADD_COMMENT:
      yield fork(addComment, payload);
      break;
    case CLEAR_DEFAULT_COMMENTS:
      yield fork(clearDefaultComments);
      break;
    default:
  }
}

function* watchComments() {
  yield takeEvery(actions, commentsSaga);
}

export default watchComments;
