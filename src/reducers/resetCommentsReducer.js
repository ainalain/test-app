import * as types from '../actions/actionTypes';
import { initialReset} from './initialState';

export default function resetCommentsReducer(state = initialReset, { type }) {
  switch (type) {
    case types.CLEAR_DEFAULT_COMMENTS:
      return true;
    default:
      return state;
  }
}
