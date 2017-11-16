import expect from 'expect';
import reducer from './commentsReducer';
import * as types from '../../actions/actionTypes';


describe('Comments reducer', () => {
  const initialState = [];
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should populate state with loaded comments', () => {
    const action = {
      type: types.LOAD_COMMENTS_SUCCESS,
      payload: [1, 2, 3, 4],
    };

    const newState = reducer(initialState, action);
    expect(newState.length).toEqual(4);
  });

  it('should add a new comment to the state', () => {
    const oldState = [{ text: 'some string', author: 'Noone',  id: 1, rating: 4 }];
    const comment = {
      text: '2 string',
      rating: 3,
    };
    const action = {
      type: types.ADD_COMMENT_SUCCESS,
      payload: comment,
    };

    const newState = reducer(oldState, action);
    expect(newState.length).toEqual(2);
  });
});
