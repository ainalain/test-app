import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const __ENV__ = process.env.NODE_ENV || 'development';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
