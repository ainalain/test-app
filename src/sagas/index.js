import { all } from 'redux-saga/effects';

import product from './productSaga';
import comments from './commentsSaga';

function* rootSaga() {
  yield all([
    product(),
    comments(),
  ]);
}

export default rootSaga;
