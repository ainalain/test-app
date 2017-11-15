import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR,
  LOAD_COMMENTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from '../actions/actionTypes';

const loadEndingActions = [
  AJAX_CALL_ERROR,
  LOAD_COMMENTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
];

export default function asyncReducer(state = 1, { type }) {
  if (type === BEGIN_AJAX_CALL){
    return 1;
  } else if (loadEndingActions.includes(type)) {
    return 0;
  }

  return state;
}
