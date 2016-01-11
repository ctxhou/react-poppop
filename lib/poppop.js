'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _components = {
  _$PopPop: {
    displayName: 'PopPop'
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'src/poppop.js',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: 'src/poppop.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopPop = (function (_Component) {
  _inherits(PopPop, _Component);

  function PopPop(props) {
    _classCallCheck(this, _PopPop);

    _get(Object.getPrototypeOf(_PopPop.prototype), 'constructor', this).call(this, props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
  }

  _createClass(PopPop, [{
    key: 'handleOverlayClick',
    value: function handleOverlayClick() {
      var overlayClick = this.props.overlayClick;

      if (overlayClick) {
        this.props.overlayClick();
      }
    }
  }, {
    key: 'handleCloseBtn',
    value: function handleCloseBtn() {
      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var position = this.props.position;

      var wrapperStyle = undefined,
          contentStyle = undefined;

      if (position !== 'full') wrapperStyle = Object.assign(_style2['default'].wrapper, _style2['default'][position]);else wrapperStyle = Object.assign(_style2['default'].wrapper);

      // merge the content style and position style
      if (position === 'full') contentStyle = Object.assign(_style2['default'].content, _style2['default'].full);else contentStyle = Object.assign(_style2['default'].content);

      return _react2['default'].createElement(
        'div',
        { style: wrapperStyle },
        this._renderOverlay(),
        _react2['default'].createElement(
          'div',
          { style: contentStyle },
          this._renderCloseBtn(),
          this.props.children
        )
      );
    }
  }, {
    key: '_renderCloseBtn',
    value: function _renderCloseBtn() {
      var _props = this.props;
      var closeBtn = _props.closeBtn;
      var position = _props.position;

      var style = _style2['default'].closeBtn;
      if (position === 'full') style = Object.assign({}, _style2['default'].closeBtn, _style2['default'].fullCloseBtn);
      if (closeBtn) {
        return _react2['default'].createElement(
          'div',
          { style: style, onClick: this.handleCloseBtn },
          '×'
        );
      }
      return;
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      var overlay = this.props.overlay;

      var overlayStyle = Object.assign(_style2['default'].overlay, { display: 'block' });

      if (overlay) {
        return _react2['default'].createElement('div', { style: overlayStyle, onClick: this.handleOverlayClick });
      }
      return;
    }
  }]);

  var _PopPop = PopPop;
  PopPop = _wrapComponent('_$PopPop')(PopPop) || PopPop;
  return PopPop;
})(_react.Component);

exports['default'] = PopPop;
module.exports = exports['default'];