import * as types from '../actionTypes';

export const getAllComments = () => ({
  type: types.GET_ALL_COMMENTS,
});

export const addComment = (text, rating) => ({
  type: types.ADD_COMMENT,
  payload: { text, rating },
});

export const clearDefaultComments = () => ({
  type: types.CLEAR_DEFAULT_COMMENTS,
});
