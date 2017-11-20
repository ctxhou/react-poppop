import React from 'react';
import Portal from '../src/portal';
import {shallow, render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

it('remove overflow style after unmount', () => {
  expect(document.body.style.overflow).toEqual('');
  const component = mount(<Portal><div>hi</div></Portal>);
  expect(document.body.style.overflow).toEqual('hidden');
  component.unmount();
  expect(document.body.style.overflow).toEqual('');
  expect(component.html()).toEqual(null);
})

it('render', () => {
  const component = mount(<Portal><div>hi</div></Portal>);
  expect(toJson(component)).toMatchSnapshot();
  jest.clearAllMocks();
});
