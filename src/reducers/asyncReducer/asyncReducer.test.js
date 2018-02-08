import reducer from './asyncReducer';
import * as types from '../../actions/actionTypes';


describe('Async reducer', () => {
  const initialState = {
    comments: 0,
    product: 0,
  };
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update async state after ajax call has begun', () => {
    const action1 = {
      type: types.GET_ALL_COMMENTS,
    };

    const action2 = {
      type: types.GET_PRODUCT,
    };

    const newState1 = reducer(initialState, action1);
    expect(newState1.comments).toEqual(1);
    const newState2 = reducer(initialState, action2);
    expect(newState2.product).toEqual(1);
  });

  it('should set state to 0 after ajax call has returned a response', () => {
    const oldState = {
      comments: 1,
      product: 1,
    };

    const action = {
      type: types.GET_ALL_COMMENTS_SUCCESS,
    };

    const action1 = {
      type: types.GET_PRODUCT_SUCCESS,
    };

    const newState = reducer(oldState, action);
    expect(newState.comments).toEqual(0);

    const newState1 = reducer(oldState, action1);
    expect(newState1.product).toEqual(0);
  });
});
