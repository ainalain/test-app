import * as types from './actionTypes';
import { ajaxCallError } from './asyncActions';
import productApi from '../api/mockProductApi';

export const getProductSuccess = (product) => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload: product,
});

export function getProduct(id) {
  return (dispatch) => {
    return productApi.getProduct(id).then(product => {
      dispatch(getProductSuccess(product));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
