import React, {Component} from 'react';
import STYLE from './style';

export default class PopPop extends Component {

  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
  }

  handleOverlayClick() {
    const {
      overlayClick
    } = this.props;

    if (overlayClick) {
      this.props.overlayClick();
    }
  }

  handleCloseBtn() {
    if (this.props.onClose)
      this.props.onClose();
  }

  render() {
    const {position} = this.props;

    let wrapperStyle,
        contentStyle;

    if (position !== 'full')
      wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position]);
    else
      wrapperStyle = Object.assign(STYLE.wrapper);

    // merge the content style and position style
    if (position === 'full')
      contentStyle = Object.assign(STYLE.content, STYLE.full);
    else
      contentStyle = Object.assign(STYLE.content);


    return (
      <div style={wrapperStyle}> 
        {this._renderOverlay()}
        <div style={contentStyle}>
          {this._renderCloseBtn()}
          {this.props.children}
        </div>
      </div>
    )
  }

  _renderCloseBtn() {
    const {closeBtn} = this.props;

    if (closeBtn) {
      return (
        <button style={STYLE.closeBtn} onClick={this.handleCloseBtn}>x</button>
      )
    }
    return;
  }

  _renderOverlay() {
    const {overlay} = this.props;
    const overlayStyle = Object.assign(STYLE.overlay, {display: 'block'});

    if (overlay) {
      return (
        <div style={overlayStyle} onClick={this.handleOverlayClick}></div>
      )
    }
    return ;
  }
}
