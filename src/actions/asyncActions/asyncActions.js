import * as types from '../actionTypes';

export const beginAjaxCall = (target) => ({
  type: types.BEGIN_AJAX_CALL,
  payload: target,
});

export const ajaxCallError = (error, target) => ({
  type: types.AJAX_CALL_ERROR,
  payload: {
    target,
    error,
  },
});
