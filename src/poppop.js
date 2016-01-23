import React, {Component} from 'react';

import STYLE from './style';
export default class PopPop extends Component {

  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
    this.handleEscKeyDown = this.handleEscKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeyDown);
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

  handleEscKeyDown(e) {
    if (this.props.closeOnEsc && e.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    const {position, backgroundStyle} = this.props;
    let wrapperStyle,
        contentStyle;

    if (position !== 'full')
      wrapperStyle = Object.assign(STYLE.wrapper, STYLE[position]);
    else if (position)
      wrapperStyle = Object.assign(STYLE.wrapper);

    // merge the content style and position style
    if (position === 'full') 
      contentStyle = Object.assign({}, STYLE.content, STYLE.full, backgroundStyle);
    else if (position === 'center') 
      contentStyle = Object.assign({}, STYLE.content, STYLE.centerContent, backgroundStyle);    // console.log(contentStyle)

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
    const {closeBtn, position} = this.props;
    let style = STYLE.closeBtn;
    if (position === 'full')
      style = Object.assign({}, STYLE.closeBtn, STYLE.fullCloseBtn);
    if (closeBtn) {
      return (
        <div style={style} onClick={this.handleCloseBtn}>&#10006;</div>
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
