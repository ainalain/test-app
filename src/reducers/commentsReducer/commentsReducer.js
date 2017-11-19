import * as types from '../../actions/actionTypes';
import { comments } from '../initialState';

export default function commentsReducer(state = comments, { type, payload }) {
  switch (type) {
    case types.GET_ALL_COMMENTS_SUCCESS:
    case types.CLEAR_DEFAULT_COMMENTS_SUCCESS:
       return [ ...payload ];
    case types.GET_ALL_COMMENTS_FAILURE:
      return payload;
    case types.ADD_COMMENT_SUCCESS:
      return [ payload, ...state];
    default:
      return state;
  }
}
