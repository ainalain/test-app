import * as types from './actionTypes';
import commentsApi from '../api/mockCommentsApi';
import { beginAjaxCall, ajaxCallError } from './asyncActions';

export function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function loadComments() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return commentsApi.getAllCommnets().then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
