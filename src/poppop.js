import React, {Component} from 'react';
import STYLE from './style';

export default class PopPop extends Component {

  constructor(props) {
    super(props);

    this.state = this._display(this.props.display);

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this._display = this._display.bind(this);
    this.hide = this.hide.bind(this);
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
    this.setState(this._display('show'));
  }

  hide() {
    this.setState(this._display('hide'));
    if (this.props.onClose)
      this.props.onClose();
  }

  // return the proper display state
  _display(display) {
    if (display === 'show') {
      return {flexDisplay: 'flex', blockDisplay: 'block'};
    } else if (display === 'hide') {
      return {flexDisplay: 'none', blockDisplay: 'none'};
    }
  }

  render() {
    let overlayTmpl,
        displayStyle = {},
        wrapperStyle,
        closeBtnTmpl;
    const {
      overlay,
      position,
      closeBtn
    } = this.props;

    const {
      flexDisplay,
      blockDisplay
    } = this.state;

    if (position !== 'full')
      wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position], {display: flexDisplay});
    else
      wrapperStyle = Object.assign(STYLE.wrapper, {display: flexDisplay});

    // merge the content style and position style
    let contentStyle;
    if (position === 'full')
      contentStyle = Object.assign(STYLE.content, STYLE.full, {display: blockDisplay});
    else
      contentStyle = Object.assign(STYLE.content, {display: blockDisplay});

    const overlayStyle = Object.assign(STYLE.overlay, {display: blockDisplay});

    if (overlay) {
      overlayTmpl = <div style={overlayStyle} 
                          onClick={this.handleOverlayClick}></div>;
    }
    if (closeBtn) {
      closeBtnTmpl = <button style={STYLE.closeBtn}
                              onClick={this.hide}>x</button>
    }

    return (
      <div style={wrapperStyle}> 
        {overlayTmpl}
        <div style={contentStyle}>
          {closeBtnTmpl}
          {this.props.children}
        </div>
      </div>
    )
  }
}
