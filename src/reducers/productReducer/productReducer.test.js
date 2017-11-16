import expect from 'expect';
import reducer from './productReducer';
import * as types from '../../actions/actionTypes';


describe('Comments reducer', () => {
  const initialState = {};
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should populate state with loaded product', () => {
    const action = {
      type: types.GET_PRODUCT_SUCCESS,
      payload: { id: 'test-id', price: '$6', name: 'test-name' },
    };

    const newState = reducer(initialState, action);
    expect(newState.id).toEqual('test-id');
    expect(newState.name).toEqual('test-name');
    expect(newState.price).toEqual('$6');
  });
});
