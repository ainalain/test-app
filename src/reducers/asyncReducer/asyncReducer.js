import {
  GET_PRODUCT,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_ALL_COMMENTS,
  GET_ALL_COMMENTS_FAILURE,
  GET_ALL_COMMENTS_SUCCESS,
  ADD_COMMENT,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  CLEAR_DEFAULT_COMMENTS,
  CLEAR_DEFAULT_COMMENTS_FAILURE,
  CLEAR_DEFAULT_COMMENTS_SUCCESS
} from '../../actions/actionTypes';

import { isLoading } from '../initialState';

export default function asyncReducer(state = isLoading, { type, payload }) {
  switch (type) {
    case GET_PRODUCT:
      return { ...state, product: 1 };
    case GET_ALL_COMMENTS:
    case ADD_COMMENT:
    case CLEAR_DEFAULT_COMMENTS:
      return { ...state, comments: 1 };
    case GET_ALL_COMMENTS_SUCCESS:
    case ADD_COMMENT_SUCCESS:
    case CLEAR_DEFAULT_COMMENTS_SUCCESS:
      return { ...state, comments: 0 };
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: 0 };
    case GET_PRODUCT_FAILURE:
      return { ...state, product: 0, error: payload.error };
    case GET_ALL_COMMENTS_FAILURE:
    case ADD_COMMENT_FAILURE:
    case CLEAR_DEFAULT_COMMENTS_FAILURE:
    return { ...state, comments: 0, error: payload.error };
    default:
      return state;
  }
}
