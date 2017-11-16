import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

const item = {
  text: 'hello world',
  rating: 4,
  author: 'john snow',
  date: 'today 3 p.m.',
};

describe('ListItem component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ListItem item={item} />);
  });

  it('renders li tag', () => {
    expect(component.find('li').length).toBe(1);
  });

  it('renders a rating component', () => {
    expect(component.find('ReactStars').length).toBe(1);
  });
});
