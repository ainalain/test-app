import expect from 'expect';

import * as actions from './asyncActions';
import * as types from '../actionTypes';

describe('Async actions', () => {
  it('should create a BEGIN_AJAX_CALL action', () => {
    const expectedAction = {
      type: types.BEGIN_AJAX_CALL,
      payload: 'comments',
    };

    const action = actions.beginAjaxCall('comments');
    expect(action).toEqual(expectedAction);
  });
});
