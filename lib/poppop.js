'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopPop = function (_Component) {
  _inherits(PopPop, _Component);

  function PopPop(props) {
    _classCallCheck(this, PopPop);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopPop).call(this, props));

    _this.handleOverlayClick = _this.handleOverlayClick.bind(_this);
    _this.handleCloseBtn = _this.handleCloseBtn.bind(_this);
    _this.handleEscKeyDown = _this.handleEscKeyDown.bind(_this);
    return _this;
  }

  _createClass(PopPop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleEscKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleEscKeyDown);
    }
  }, {
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
    key: 'handleEscKeyDown',
    value: function handleEscKeyDown(e) {
      if (this.props.closeOnEsc && e.keyCode === 27) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var position = this.props.position;

      var _contentStyle = this.props.contentStyle;
      var wrapperStyle = void 0,
          contentStyle = void 0;

      if (position !== 'full') wrapperStyle = Object.assign({}, _style2.default.wrapper, _style2.default[position]);else if (position) wrapperStyle = Object.assign({}, _style2.default.wrapper);

      // merge the content style and position style
      if (position === 'full') contentStyle = Object.assign({}, _style2.default.content, _style2.default.full, _contentStyle);else if (position === 'center') contentStyle = Object.assign({}, _style2.default.content, _style2.default.centerContent, _contentStyle); // console.log(contentStyle)

      return _react2.default.createElement(
        'div',
        { style: wrapperStyle },
        this._renderOverlay(),
        _react2.default.createElement(
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

      var style = _style2.default.closeBtn;
      if (position === 'full') style = Object.assign({}, _style2.default.closeBtn, _style2.default.fullCloseBtn);
      if (closeBtn) {
        return _react2.default.createElement(
          'div',
          { style: style, onClick: this.handleCloseBtn },
          '✖'
        );
      }
      return;
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      var overlay = this.props.overlay;

      var overlayStyle = Object.assign(_style2.default.overlay, { display: 'block' });

      if (overlay) {
        return _react2.default.createElement('div', { style: overlayStyle, onClick: this.handleOverlayClick });
      }
      return;
    }
  }]);

  return PopPop;
}(_react.Component);

exports.default = PopPop;
module.exports = exports['default'];