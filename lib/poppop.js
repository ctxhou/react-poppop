'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var PopPop = (function (_Component) {
  _inherits(PopPop, _Component);

  function PopPop(props) {
    _classCallCheck(this, PopPop);

    _get(Object.getPrototypeOf(PopPop.prototype), 'constructor', this).call(this, props);
    this.state = {
      display: this.props.display
    };

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.hide = this.hide.bind(this);
  }

  _createClass(PopPop, [{
    key: 'handleOverlayClick',
    value: function handleOverlayClick() {
      var overlayClick = this.props.overlayClick;

      if (overlayClick) {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({ display: 'show' });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ display: 'hide' });
      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var overlayTmpl = undefined,
          displayStyle = {},
          wrapperStyle = undefined,
          closeBtnTmpl = undefined;
      var _props = this.props;
      var overlay = _props.overlay;
      var position = _props.position;
      var closeBtn = _props.closeBtn;

      var display = this.state.display;

      if (display === 'hide') {
        displayStyle.display = 'none';
        wrapperStyle = Object.assign(_style2['default'].wrapper, _style2['default'][position], { display: 'none' });
      } else if (display === 'show') {
        displayStyle.display = 'block';
        wrapperStyle = Object.assign(_style2['default'].wrapper, _style2['default'][position], { display: 'flex' });
      }

      // merge the content style and position style
      var contentStyle = Object.assign(_style2['default'].content, displayStyle);
      var overlayStyle = Object.assign(_style2['default'].overlay, displayStyle);

      if (overlay) {
        overlayTmpl = _react2['default'].createElement('div', { style: overlayStyle,
          onClick: this.handleOverlayClick });
      }
      if (closeBtn) {
        closeBtnTmpl = _react2['default'].createElement(
          'button',
          { style: _style2['default'].closeBtn,
            onClick: this.hide },
          'x'
        );
      }

      return _react2['default'].createElement(
        'div',
        { style: wrapperStyle },
        overlayTmpl,
        _react2['default'].createElement(
          'div',
          { style: contentStyle },
          closeBtnTmpl,
          this.props.children
        )
      );
    }
  }]);

  return PopPop;
})(_react.Component);

exports['default'] = PopPop;
module.exports = exports['default'];