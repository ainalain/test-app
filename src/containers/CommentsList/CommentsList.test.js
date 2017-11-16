import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { CommentsList } from './CommentsList';

describe('CommentsList', () => {
  let component;

  const props = {
    comments: [1, 2, 3, 4],
    getAllComments: () => {},
    addComment: () => {},
  };
  beforeEach(() => {
    component = shallow(<CommentsList {...props} />);
  });

  it('renders an h2 with provided text', () => {
    expect(component.find('h2').length).toBe(1);
    expect(component.find('h2').text()).toBe('4 comments');
  });
});
