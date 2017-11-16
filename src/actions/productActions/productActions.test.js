import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from './productActions';
import * as types from '../actionTypes';
import product from '../../api/mockProductApi';

describe('Product actions', () => {
  //Test a sync action
  it('should create a GET_PRODUCT_SUCCESS action', () => {
    const expectedAction = {
      type: types.GET_PRODUCT_SUCCESS,
      payload: product,
    };

    const action = actions.getProductSuccess(product);
    expect(action).toEqual(expectedAction);
  });

  //Test async actions
  describe('Async product action', () => {
    const mockStore = configureMockStore([thunk]);
    it('should create BEGIN_AJAX_CALL and GET_PRODUCT_SUCCESS when loading product', (done) => {
      const expectedActions = [
      { type: types.BEGIN_AJAX_CALL, payload: 'product' },
      { type: types.GET_PRODUCT_SUCCESS, payload: product }
      ];

      const store = mockStore({ product: {}, expectedActions});
      store.dispatch(actions.getProduct()).then(() => {
        const productActions = store.getActions();
        expect(productActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(productActions[1].type).toEqual(types.GET_PRODUCT_SUCCESS);
        done();
      });
    });
  });
});
