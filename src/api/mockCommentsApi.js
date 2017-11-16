import moment from 'moment';

import comments from './comments.json';

const delay = 1000;

const authors = [
  'Jane Austen',
  'William Blake',
  'Geoffrey Chaucer',
  'Charles Dickens 1812-1870',
  'John Donne',
  'George Eliot',
  'William Shakespeare',
  'John Milton',
  'George Orwell',
  'Emily Dickinson',
  'William Faulkner',
  'F. Scott Fitzgerald',
  'Robert Frost',
  'Ernest Hemingway',
];

const getRandomAuthor = () => {
  const max = authors.length - 1;
  const min = 0;
  const index = Math.floor(Math.random()*(max-min+1)+min);
  return authors[index];
};

const makeCommentProps = () => {
  const currentDate = moment();
  const date = moment(currentDate).format("Do MMMM YYYY, h:mm a");
  const id = Math.round(+new Date()/1000);

  const author = getRandomAuthor();
  return {
    date,
    id,
    author,
  };
};


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

  static addComment(text, rating) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text.length < 1) {
          reject(`Comment must be at least 1 character.`);
        }
        const props = makeCommentProps();
        const newComment = { ...props, text: text, rating };
        const newComments = [...comments, newComment];
        return resolve(newComment);
      }, delay);
    });
  }

  static clearComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve([]);
      }, delay);
    });
  }
}
