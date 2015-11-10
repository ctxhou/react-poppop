import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import STYLE from './style';

export default class PopPop extends Component {

  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  handleOverlayClick() {
    const {
      overlayClick
    } = this.props;

    if (overlayClick) {
      this.hide();
    }
  }

  show() {
    ReactDOM.findDOMNode(this.refs.popup).style.display = 'block';
  }

  hide() {
    ReactDOM.findDOMNode(this.refs.popup).style.display = 'none';
  }

  render() {
    let overlayTmpl,
        displayStyle = {};
    const {
      overlay,
      position,
      display
    } = this.props;
    if (display === 'hide') {
      displayStyle.display = 'none';
    } else if (display === 'show') {
      displayStyle.display = 'block';
    }

    // merge the content style and position style
    const wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position]);
    const contentStyle = Object.assign(STYLE.content, displayStyle);
    const overlayStyle = Object.assign(STYLE.overlay, displayStyle);

    if (overlay) {
      overlayTmpl = <div style={STYLE.overlay} 
                          onClick={this.handleOverlayClick}></div>;
    }

    return (
      <div style={wrapperStyle} ref="popup"> 
        {overlayTmpl}
        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
