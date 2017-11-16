import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import styles from './Card.scss';

const props = {
  product: {
    id: 'classic-gelato',
    name: 'The best gelato in Moscow',
  },
};

describe('Card', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Card {...props} />);
  });

  it('renders a section with "card" style', () => {
    expect(component.find(`section.${styles.card}`).length).toBe(1);
  });

  it('renders an img tag', () => {
    expect(component.find('img').length).toBe(1);
  });

  it('renders a button', () => {
    expect(component.find('button').length).toBe(1);
  });
});
