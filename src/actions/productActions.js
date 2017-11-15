import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './asyncActions';
import productApi from '../api/mockProductApi';

export const getProductSuccess = (product) => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload: product,
});

const PRODUCT_TARGET = 'product';

export function getProduct(id) {
  return (dispatch) => {
    dispatch(beginAjaxCall(PRODUCT_TARGET));
    return productApi.getProduct(id).then(product => {
      dispatch(getProductSuccess(product));
    }).catch(error => {
      dispatch(ajaxCallError(error, PRODUCT_TARGET));
      throw (error);
    });
  };
}
