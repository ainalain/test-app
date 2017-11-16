import * as types from '../actionTypes';
import commentsApi from '../../api/mockCommentsApi';
import { beginAjaxCall, ajaxCallError } from '../asyncActions/asyncActions';

export const loadCommentsSuccess = (comments) => ({
  type: types.LOAD_COMMENTS_SUCCESS,
  payload: comments,
});

export const addCommentSuccess = (result) => ({
  type: types.ADD_COMMENT_SUCCESS,
  payload: result,
});

export const clearDefaultComments = () => ({
  type: types.CLEAR_DEFAULT_COMMENTS,
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

export const addComment = (comment, rating) => (
  (dispatch) => {
    return commentsApi.addComment(comment, rating).then(result =>
      dispatch(addCommentSuccess(result)
    )).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  }
);

export const clearComments = () => (
  (dispatch) => {
    return commentsApi.clearComments().then(comments => {
      dispatch(clearDefaultComments());
      return dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  }
);
