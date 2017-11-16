import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer/commentsReducer';
import asyncReducer from './asyncReducer/asyncReducer';
import productReducer from './productReducer/productReducer';
import resetCommentsReducer from './resetCommentsReducer/resetCommentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  isLoading: asyncReducer,
  product: productReducer,
  reset: resetCommentsReducer,
});

export default rootReducer;
