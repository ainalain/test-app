import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const __ENV__ = process.env.NODE_ENV || 'development';

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

  sagaMiddleware.run(rootSaga);


export default store;
