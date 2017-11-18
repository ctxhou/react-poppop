import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable/lib/Tappable';
import {Transition} from 'react-transition-group';
import {extractCamelCase} from './utils';
import styles from './style';

export default class PopPop extends Component {
  static defaultProps = {
    position: 'topCenter',
    overlayStyle: {}
  };

  static propTypes = {
    open: PropTypes.bool,
    closeBtn: PropTypes.bool,
    overlayStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    closeOnOverlay: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    position: PropTypes.oneOf([
      'topLeft', 'topCenter', 'topRight',
      'centerLeft', 'centerCenter', 'centerRight',
      'bottomLeft', 'bottomCenter', 'bottomRight',
    ])
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleEscKeyDown);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleEscKeyDown);      
    }
  }

  handleOverlayClick = () => {
    if (this.props.closeOnOverlay) {
      this.props.onClose();
    }
  }

  handleCloseBtn = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleEscKeyDown = (e) => {
    if (this.props.closeOnEsc && e.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    const {open, position, overlayStyle, contentStyle} = this.props;
    const extractPosition = extractCamelCase(position);
    const mergeWrapperStyle = {
      ...styles.wrapper,
      ...styles.alignItems[extractPosition[0]],
      ...styles.justifyContent[extractPosition[1]]
    }

    const mergeOverlayStyle = {
      ...styles.overlay,
      ...overlayStyle
    }

    const mergeContentStyle = {
      ...styles.content,
      ...contentStyle
    }

    if (!open) return null;

    return (
      <Transition in={open} appear timeout={100}>
        {state => {
          return <div style={{
                ...mergeWrapperStyle,
                ...styles.transitionStyles[state]
               }}>
            <Tappable onTap={this.handleOverlayClick}
                      style={mergeOverlayStyle}/>
            <div style={mergeContentStyle}>
              {this._renderCloseBtn()}
              {this.props.children}
            </div>
          </div>
        }}
      </Transition>
    )
  }

  _renderCloseBtn() {
    if (this.props.closeBtn) {
      return (
        <div style={styles.closeBtn} onClick={this.handleCloseBtn}>
          <svg viewBox="0 0 40 40">
            <g><path d="m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z"/></g>
          </svg>
        </div>
      );
    }
    return null;
  }
}
