import * as types from '../actions/actionTypes';
import { comments } from './initialState';

export default function commentsReducer(state = comments, { type, payload }) {
  switch (type) {
    case types.LOAD_COMMENTS_SUCCESS:
       return [ ...payload ];
    case types.LOAD_COMMENTS_FAILURE:
      return payload;
    case types.ADD_COMMENT_SUCCESS:
      return [ ...state, ...payload ];
    default:
      return state;
  }
}
