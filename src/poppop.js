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
  }

  render() {
    let overlayTmpl,
        displayStyle = {};
    const {
      overlay,
      position
    } = this.props;
    const display = this.state.display;

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
      <div style={wrapperStyle}> 
        {overlayTmpl}
        <div style={contentStyle}>
          <button style={STYLE.closeBtn}
                  onClick={this.hide}>x</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}
