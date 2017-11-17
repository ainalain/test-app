import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  it('renders an img tag', () => {
    const component = shallow(<Loading ajaxCallInProgress />);
    expect(component.find('img').length).toBe(1);
  });
});
