import expect from 'expect';
import React from 'react';
import { shallow , mount } from 'enzyme';
import { ProductPage } from './ProductPage';

const props = {
  getProduct: () => {},
  product: {},
};

const setup = () => shallow(<ProductPage {...props} />);

describe('ProductPage', () => {
  it('renders Card component', () => {
    const component = setup();

    expect(component.find('Card').length).toBe(1);
  });

  it('renders Loading component', () => {
    const component = setup();

    expect(component.find('Loading').length).toBe(1);
  });

  it('calls componentWillMount method before page is rendered', () => {
    const spy = sinon.spy(ProductPage.prototype, 'componentWillMount');

    const component = setup();

    expect(spy.called).toBe(true);
    spy.restore();
  });
});
