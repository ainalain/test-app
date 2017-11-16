import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from './commentActions';
import * as types from '../actionTypes';
import comments from '../../api/comments';

describe('Comments actions', () => {
  //Test a sync action
  it('should create a LOAD_COMMENTS_SUCCESS action', () => {
    const expectedAction = {
      type: types.LOAD_COMMENTS_SUCCESS,
      payload: comments,
    };

    const action = actions.loadCommentsSuccess(comments);
    expect(action).toEqual(expectedAction);
  });

  it('should create an ADD_COMMENT_SUCCESS action', () => {
    const comment = { id: 'test', text: 'text' };
    const expectedAction = {
      type: types.ADD_COMMENT_SUCCESS,
      payload: comment,
    };

    const action = actions.addCommentSuccess(comment);

    expect(action).toEqual(expectedAction);
  });

  //Test async actions
  describe('Async comment actions', () => {
    const mockStore = configureMockStore([thunk]);
    it('should create BEGIN_AJAX_CALL and LOAD_COMMENTS_SUCCESS when loading comments', (done) => {
      const expectedActions = [
      { type: types.BEGIN_AJAX_CALL, payload: 'comments' },
      { type: types.LOAD_COMMENTS_SUCCESS, payload: comments }
      ];

      const store = mockStore({ comments: [], expectedActions});
      store.dispatch(actions.getAllComments()).then(() => {
        const commentActions = store.getActions();
        expect(commentActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(commentActions[1].type).toEqual(types.LOAD_COMMENTS_SUCCESS);
        done();
      });
    });
  });
});
