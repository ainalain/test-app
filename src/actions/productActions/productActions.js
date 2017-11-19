import * as types from '../actionTypes';

export const getProduct = (id) => ({
  type: types.GET_PRODUCT,
  payload: id,
});
