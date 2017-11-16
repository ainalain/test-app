import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CommentInput from './CommentInput';


describe('CommentInput', () => {
  let component;

  const props = {
    onCommentChange: () => {},
    onRatingChange: () => {},
    onSubmit: () => {},
    error: '',
  };
  beforeEach(() => {
    component = shallow(<CommentInput {...props} />);
  });

  it('renders textarea element', () => {
    expect(component.find('textarea').length).toBe(1);
  });

  it('renders ReactStars component', () => {
    expect(component.find('ReactStars').length).toBe(1);
  });

  it('renders button element', () => {
    expect(component.find('button').length).toBe(1);
  });
});
