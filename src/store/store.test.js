import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as actions from '../actions/commentActions/commentActions';
import comments from '../api/comments';

describe('Store', () => {
  it('should handle comments comments', () => {
    const initialState = {
      isLoading: true,
      comments: [],
    }
    const store = createStore(rootReducer, initialState);

    const action = actions.loadCommentsSuccess(comments);
    store.dispatch(action);

    const actual = store.getState().comments[2]; //with shortest text
    const expected = {
      "text": "Initially, the internet wasn’t built to support such dynamic and complex web apps.",
      "date": "5th November 2017, 1:03 am.",
      "rating": 5
    };

    expect(actual).toEqual(expected);
  });

  it('should handle adding 1 new comment', () => {
    const initialState = {
      comments: [...comments]
    };

    const store = createStore(rootReducer, initialState);
    const comment = {
      id: 'test',
      text: 'text',
      rating: 4,
    };

    const addCommentAction = actions.addCommentSuccess(comment);
    store.dispatch(addCommentAction);

    const newState = store.getState().comments[0].id;
    const expectedId = 'test';

    expect(expectedId).toEqual(newState);
  });
});
