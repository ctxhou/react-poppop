import React from 'react';
import PopPop from '../src';
import {shallow, render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import {extractCamelCase} from '../src/utils';
import {alignItems, justifyContent} from '../src/style';

const shareComponent = props => (
  <PopPop open={true} {...props}>
    content
  </PopPop>
);

describe('render', () => {
  it('no props', () => {
    const component = mount(shareComponent());
    expect(toJson(component)).toMatchSnapshot();
  });

  it('close', () => {
    const component = mount(shareComponent({open: false}));
    expect(component.html()).toEqual(null);
  })
})

describe('props', () => {
  it('position style', () => {
    const positionList = [
      'topLeft', 'topCenter', 'topRight',
      'centerLeft', 'centerCenter', 'centerRight',
      'bottomLeft', 'bottomCenter', 'bottomRight',
    ];
    positionList.forEach(position => {
      const component = mount(shareComponent({position}))
      const extract = extractCamelCase(position);

      expect(component.find('div').get(0).props.style).toMatchObject(alignItems[extract[0]])
      expect(component.find('div').get(0).props.style).toMatchObject(justifyContent[extract[1]])
    })
  })

  it('overlay style', () => {
    const component = mount(shareComponent({overlayStyle: {background: 'red'}}));
    expect(component.find('Tappable').get(0).props.style).toMatchObject({background: 'red'});
  })

  it('content style', () => {
    const component = mount(shareComponent({contentStyle: {background: 'red'}}));
    expect(component.find('div').get(1).props.style).toMatchObject({background: 'red'});
  })

  it('has close button & trigger onClose', () => {
    const mockClose = jest.fn();
    const component = mount(shareComponent({onClose: mockClose, closeBtn: true}));
    component.find('svg').at(0).simulate('click');
    expect(mockClose).toBeCalled();
  })
})
