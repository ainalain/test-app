import expect from 'expect';
import React from 'react';
import { shallow , mount } from 'enzyme';
import { ProductPage } from './ProductPage';


describe('ProductPage', () => {
  let component;

  const props = {
    getProduct: () => {},
    product: {},
  };
  beforeEach(() => {
    component = shallow(<ProductPage {...props} />);
  });

  it('renders Card component', () => {
    expect(component.find('Card').length).toBe(1);
  });
});
