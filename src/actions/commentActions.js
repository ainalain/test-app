import * as types from './actionTypes';
import commentsApi from '../api/mockCommentsApi';
import { beginAjaxCall, ajaxCallError } from './asyncActions';

export const loadCommentsSuccess = (comments) => ({
  type: types.LOAD_COMMENTS_SUCCESS,
  payload: comments,
});

const COMMENTS_TARGET = 'comments';

export const getAllComments = () => (
  (dispatch) => {
    dispatch(beginAjaxCall(COMMENTS_TARGET));
    return commentsApi.getAllComments().then(comments =>
      dispatch(loadCommentsSuccess(comments)
    )).catch(error => {
      dispatch(ajaxCallError(error, COMMENTS_TARGET));
      throw (error);
    });
  }
);
