import * as actions from './productActions';
import * as types from '../actionTypes';

describe('Product actions', () => {
  //Test a sync action
  it('should create a GET_PRODUCT action', () => {
    const id = 'test-id';
    const expectedAction = {
      type: types.GET_PRODUCT,
      payload: id,
    };

    const action = actions.getProduct(id);
    expect(action).toEqual(expectedAction);
  });
});
