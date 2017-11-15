import * as types from '../actions/actionTypes';
import { product } from './initialState';

export default function productReducer(state = product, { type, payload }) {
  switch (type) {
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
}
