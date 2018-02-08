import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { CommentsList } from './CommentsList';

const props = {
  comments: [1, 2, 3, 4],
  getAllComments: () => {},
  addComment: () => {},
  clearComments: () => {},
};

const setup = () => shallow(<CommentsList {...props} />);

/* eslint-disable no-undef */
describe('CommentsList', () => {
  it('renders an h2 with provided text', () => {
    const component = setup();

    expect(component.find('h2').length).toBe(1);
    expect(component.find('h2').text()).toBe('4 comments');
  });

  it('renders CommentInput component', () => {
    const component = setup();
    expect(component.find('CommentInput').length).toBe(1);
  });

  it('renders ItemsList component', () => {
    const component = setup();

    expect(component.find('ItemsList').length).toBe(1);
  });

  it('renders button element', () => {
    const component = setup();

    expect(component.find('button').length).toBe(2);
  });

  it('calls componentWillMount method before page is rendered', () => {
    const componentWillMountSpy = sinon.spy(CommentsList.prototype, 'componentWillMount');
    const component = shallow(<CommentsList {...props} />);

    expect(componentWillMountSpy.calledOnce).toBe(true);
    componentWillMountSpy.restore();
  });

  it('changes state after corresponding user actions', () => {
    const event1 = {
      target: {
        value: 'test',
      },
    };

    const event2 = {
      target: {
        value: 2,
      },
    };

    const component = mount(<CommentsList {...props} />);
    component.setState({ error: 'error' });

    const textarea = component.find('textarea');
    textarea.simulate('change', event1);

    expect(component.state().currentComment).toEqual('test');
    expect(component.state().error).toEqual('');;
  });

  /*
   * This was a hard one. I couldn't stub a static method without invoking
   * forceUpdate on the component instance
   */
  it('calls onResetButtonClick after resetButton has been clicked', () => {
    const component = mount(<CommentsList {...props} />);
    const instance = component.instance();
    const spy = sinon.stub(instance, 'onResetButtonClick').callsFake(() => {});
    instance.forceUpdate();

    const button = component.find('button').last();

    button.simulate('click');

    expect(spy.called).toBe(true);
    spy.restore();
  });

  it('dispatches addComment action after submit button with new comments has been clicked', () => {
    const spy = sinon.spy();

    const component = mount(<CommentsList {...props} addComment={spy} />);
    component.setState({ currentRating: 5, currentComment: 'test' });

    const button = component.find('button').first();

    button.simulate('click');

    expect(spy.called).toBe(true);
  });
});
