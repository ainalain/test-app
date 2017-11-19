import expect from 'expect';
import {
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';

import watchProduct, { productSaga, getProduct } from './productSaga';

import ProductApi from '../../api/mockProductApi';

import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../../actions/actionTypes';

const actions = [
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
];

describe('productSaga', () => {
  it('should call takeEvery with array of expected actions', () => {
    const gen = watchProduct();
    const expectedYield = takeEvery(actions, productSaga);
    const actualYield = gen.next().value;

    expect(actualYield).toEqual(expectedYield);
  });

  it('should call getProduct saga after corresponding action type', () => {
    const worker = productSaga({ type: GET_PRODUCT, id: 'test-id' });
    const actualYield = worker.next().value;

    const expectedYield = fork(getProduct, undefined);

    expect(actualYield).toEqual(expectedYield);
   });

   it('should call api for product with provided id', () => {
     const id = 'test-id';
     const worker = getProduct(id);
     const actualYield = worker.next(id).value;

     const expectedYield = call(ProductApi.getProduct, id);

     expect(actualYield).toEqual(expectedYield);
    });

    it('should dispatch success action with product as payload', () => {
      const product = {
        id: 'test-id',
        name: 'test-name',
      };
      const worker = getProduct();
      worker.next();

      const actualYield = worker.next(product).value;

      const expectedYield = put({
        type: GET_PRODUCT_SUCCESS,
        payload: product,
      });

      expect(actualYield).toEqual(expectedYield);
     });

     it('should dispatch error action if call to api has failed', () => {
      const error = {
        message: 'Something failed',
        code: 500,
      };
       const worker = getProduct();
       worker.next();

       const actualYield = worker.throw(error).value;

       const expectedYield = put({
         type: GET_PRODUCT_FAILURE,
         payload: error,
       });

       expect(actualYield).toEqual(expectedYield);
      });
});
