'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: none;\n  border: none;\n  color: ', ';\n  font-size: ', ';\n  font-family: ', ';\n  flex: 1;\n  &:focus { outline: none; }\n'], ['\n  background: none;\n  border: none;\n  color: ', ';\n  font-size: ', ';\n  font-family: ', ';\n  flex: 1;\n  &:focus { outline: none; }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Pwd = require('./Pwd.js');

var _Pwd2 = _interopRequireDefault(_Pwd);

var _styles = require('../styles');

var _utility = require('../utility');

var _reactAutocompletely = require('react-autocompletely');

var _reactAutocompletely2 = _interopRequireDefault(_reactAutocompletely);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputText = _styledComponents2.default.input(_templateObject, (0, _styles.term)('fontColor'), (0, _styles.term)('fontSize'), (0, _styles.term)('fontFamily'));

var Prompt = function (_Component) {
  _inherits(Prompt, _Component);

  function Prompt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Prompt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Prompt.__proto__ || Object.getPrototypeOf(Prompt)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '', meta: {} }, _this.handleKeys = function (_ref2) {
      var keyCode = _ref2.keyCode;

      if (keyCode === _utility.KEYS.enter && _this.state.meta.isValid) {
        _this.props.onSubmit(_this.state.value);
        _this.setState({ value: '' });
      }
    }, _this.handleChange = function (_ref3) {
      var value = _ref3.target.value;

      var meta = _this.props.onChange(value);
      _this.setState({ value: value, meta: meta });
    }, _this.focus = function () {
      _this.input.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Prompt, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeys);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeys);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reflexbox.Flex,
        null,
        _react2.default.createElement(_Pwd2.default, { mx: 1 }),
        _react2.default.createElement(InputText, {
          onChange: this.handleChange,
          type: 'text',
          value: this.state.value,
          innerRef: function innerRef(i) {
            return _this2.input = i;
          }
        })
      );
    }
  }]);

  return Prompt;
}(_react.Component);

exports.default = Prompt;