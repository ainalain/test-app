import comments from './comments.json';

const delay = 1000;

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export default class CommentsApi {
  static getAllComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(comments);
      }, delay);
    });
  }
}
