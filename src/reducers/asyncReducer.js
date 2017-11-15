import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR,
  LOAD_COMMENTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from '../actions/actionTypes';

import { isLoading } from './initialState';

const successActions = [
  LOAD_COMMENTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
];

export default function asyncReducer(state = isLoading, { type, payload }) {
  switch (type) {
    case BEGIN_AJAX_CALL:
      if (payload === 'comments') {
        return { ...state, comments: 1 };
      }
      return { ...state, product: 1 };
    case LOAD_COMMENTS_SUCCESS:
      return { ...state, comments: 0 };
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: 0 };
    case AJAX_CALL_ERROR:
      if (payload.target === 'comments') {
        return { ...state, comments: 0, error: payload.eror };
      }
      return { ...state, product: 0, error: payload.error };
    default:
      return state;
  }
}
