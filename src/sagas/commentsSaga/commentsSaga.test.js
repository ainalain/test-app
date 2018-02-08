import {
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';

import watchComments, {
  commentsSaga,
  getAllComments,
  addComment,
  clearDefaultComments,
} from './commentsSaga';

import CommentsApi from '../../api/mockCommentsApi';
import comments from '../../api/comments';

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

describe('commentsSaga', () => {
  const error = {
    message: 'Something failed',
    code: 500,
  };

  it('should call takeEvery with array of expected actions', () => {
    const gen = watchComments();
    const expectedYield = takeEvery(actions, commentsSaga);
    const actualYield = gen.next().value;

    expect(actualYield).toEqual(expectedYield);
  });

  describe('getAllComments saga', () => {
    it('should call getAllComments saga after corresponding action', () => {
      const worker = commentsSaga({ type: GET_ALL_COMMENTS });
      const actualYield = worker.next().value;

      const expectedYield = fork(getAllComments);

      expect(actualYield).toEqual(expectedYield);
    });

    it('should call api for all comments', () => {
      const worker = getAllComments();
      const actualYield = worker.next().value;

      const expectedYield = call(CommentsApi.getAllComments);

      expect(actualYield).toEqual(expectedYield);
    });

    it('should dispatch success action with comments as payload', () => {
      const worker = getAllComments();
      worker.next();

      const actualYield = worker.next(comments).value;

      const expectedYield = put({
        type: GET_ALL_COMMENTS_SUCCESS,
        payload: comments,
      });

      expect(actualYield).toEqual(expectedYield);
    });

    it('should dispatch error action if call to api has failed', () => {
      const worker = getAllComments();
      worker.next();

      const actualYield = worker.throw(error).value;

      const expectedYield = put({
        type: GET_ALL_COMMENTS_FAILURE,
        payload: error,
      });

      expect(actualYield).toEqual(expectedYield);
    });
  });

  describe('addComment saga', () => {
    const comment = {
      text: 'test-id',
      rating: 2,
    };

    it('should call addComment saga after corresponding action', () => {
      const worker = commentsSaga({ type: ADD_COMMENT, payload: comment });
      const actualYield = worker.next().value;

      const expectedYield = fork(addComment, comment);

      expect(actualYield).toEqual(expectedYield);
    });

    it('should call api for adding a new comment', () => {
      const worker = addComment(comment);
      const actualYield = worker.next(comment).value;

      const expectedYield = call(CommentsApi.addComment, comment.text, comment.rating);

      expect(actualYield).toEqual(expectedYield);
    });

    it('should dispatch success action comment as payload', () => {
      const worker = addComment(comment);
      worker.next();

      const actualYield = worker.next(comment).value;

      const expectedYield = put({
        type: ADD_COMMENT_SUCCESS,
        payload: comment,
      });

      expect(actualYield).toEqual(expectedYield);
    });

    it('should dispatch error action if call to api has failed', () => {
      const worker = addComment(comment);
      worker.next();

      const actualYield = worker.throw(error).value;

      const expectedYield = put({
        type: ADD_COMMENT_FAILURE,
        payload: error,
      });

      expect(actualYield).toEqual(expectedYield);
    });

    describe('Clear default comments saga', () => {
      it('should call clearDefaultComments saga after corresponding action', () => {
        const worker = commentsSaga({ type: CLEAR_DEFAULT_COMMENTS });
        const actualYield = worker.next().value;

        const expectedYield = fork(clearDefaultComments);

        expect(actualYield).toEqual(expectedYield);
      });

      it('should call api to clear default comments', () => {
        const worker = clearDefaultComments();
        const actualYield = worker.next().value;

        const expectedYield = call(CommentsApi.clearDefaultComments);

        expect(actualYield).toEqual(expectedYield);
      });

      it('should dispatch success action comment as payload', () => {
        const newComments = [];
        const worker = clearDefaultComments();
        worker.next();

        const actualYield = worker.next(newComments).value;

        const expectedYield = put({
          type: CLEAR_DEFAULT_COMMENTS_SUCCESS,
          payload: newComments
        });

        expect(actualYield).toEqual(expectedYield);
      });

      it('should dispatch error action if call to api has failed', () => {

        const worker = clearDefaultComments();
        worker.next();

        const actualYield = worker.throw(error).value;

        const expectedYield = put({
          type: CLEAR_DEFAULT_COMMENTS_FAILURE,
          payload: error,
        });

        expect(actualYield).toEqual(expectedYield);
      });
    });
  });
});
