import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';


describe('Header', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders a header tag', () => {
    expect(component.find('header').length).toBe(1);
  });

  it('renders a nav element', () => {
    expect(component.find('nav').length).toBe(1);
  })

  it('renders Icon component', () => {
    expect(component.find('Icon').length).toBe(1);
  });

  it('renders input', () => {
    expect(component.find('input').length).toBe(1);
  });
});
