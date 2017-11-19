import { put, takeEvery, fork, call } from 'redux-saga/effects';

import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../../actions/actionTypes';

import ProductApi from '../../api/mockProductApi';

const actions = [
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
];

/*
 * We could use here some helper module for make and handle requests
 * For now, we use our mock api module
 */
export function* getProduct(id) {
  try {
    const response = yield call(ProductApi.getProduct, id);

    yield put({
      type: GET_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (err) {

    yield put({
      type: GET_PRODUCT_FAILURE,
      payload: err,
    });
  }
}

export function* productSaga({ type, payload }:Object) {
  switch (type) {
    case GET_PRODUCT:
      yield fork(getProduct, payload);
      break;
    default:
  }
}

/*
 * Eventually, here could be several actions related to product
 */
function* watchProduct() {
  yield takeEvery(actions, productSaga);
}

export default watchProduct;
