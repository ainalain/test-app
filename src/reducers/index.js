import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import asyncReducer from './asyncReducer';
import productReducer from './productReducer';
import resetCommentsReducer from './resetCommentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  isLoading: asyncReducer,
  product: productReducer,
  reset: resetCommentsReducer,
});

export default rootReducer;
