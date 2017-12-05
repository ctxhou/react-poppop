import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const hasCreatePortal = ReactDOM.createPortal !== undefined;
const createPortal = hasCreatePortal
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    document.body.appendChild(this.el);
    this.originBodyOverflow = document.body.style.overflow;
    this.isHidden = this.originBodyOverflow === 'hidden';

    if (!this.isHidden) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    this.renderUnstableSubtree();
  }

  componentDidUpdate() {
    this.renderUnstableSubtree();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.open) {
      this.resetBodyOverflow();
    }
  }

  componentWillUnmount() {
    this.removePortal();
    this.resetBodyOverflow();
  }

  resetBodyOverflow() {
    if (!this.isHidden) {
      document.body.style.overflow = this.originBodyOverflow;
    }
  }

  removePortal() {
    if (hasCreatePortal) {
      document.body.removeChild(this.el);
    } else {
      ReactDOM.unmountComponentAtNode(this.el);
    }
  }

  renderUnstableSubtree() {
    if (!hasCreatePortal) {
      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.el);
    }
  }

  render() {
    if (hasCreatePortal) {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
    return null;
  }
}
