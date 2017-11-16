import expect from 'expect';
import reducer from './resetCommentsReducer';
import * as types from '../../actions/actionTypes';


describe('Reset default comments reducer', () => {
  const initialState = false;
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update resetComments state after correspondant action', () => {
    const action = {
      type: types.CLEAR_DEFAULT_COMMENTS,
    };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(true);
  });
});
