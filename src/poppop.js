import React, {Component} from 'react';
import STYLE from './style';

export default class PopPop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: this.props.display
    }

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
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
    this.setState({display: 'show'});
  }

  hide() {
    this.setState({display: 'hide'});
    if (this.props.onClose)
      this.props.onClose();
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
    const display = this.state.display;

    if (display === 'hide') {
      displayStyle.display = 'none';
      wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position], {display: 'none'});
    } else if (display === 'show') {
      displayStyle.display = 'block';
      wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position], {display: 'flex'});
    }

    // merge the content style and position style
    const contentStyle = Object.assign(STYLE.content, displayStyle);
    const overlayStyle = Object.assign(STYLE.overlay, displayStyle);

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
