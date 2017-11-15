import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import asyncReducer from './asyncReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  isLoading: asyncReducer,
  product: productReducer,
});

export default rootReducer;
