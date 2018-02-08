import * as actions from './commentActions';
import * as types from '../actionTypes';

describe('Comments actions', () => {
  it('should create a GET_ALL_COMMENTS action', () => {
    const expectedAction = {
      type: types.GET_ALL_COMMENTS
    };

    const action = actions.getAllComments();
    expect(action).toEqual(expectedAction);
  });

  it('should create an ADD_COMMENT action', () => {
    const text = 'some text';
    const rating = 5;
    const expectedAction = {
      type: types.ADD_COMMENT,
      payload: { text, rating },
    };

    const action = actions.addComment(text, rating);

    expect(action).toEqual(expectedAction);
  });
});
