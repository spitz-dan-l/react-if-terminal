'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 50%;\n  background: ', ';\n  width: 10px;\n  height: 10px;\n'], ['\n  border-radius: 50%;\n  background: ', ';\n  width: 10px;\n  height: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 10px;\n  top: 12px;\n  display: flex;\n'], ['\n  position: absolute;\n  left: 10px;\n  top: 12px;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: ivory;\n  font-family: ', ';\n'], ['\n  color: ivory;\n  font-family: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n'], ['\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Prompt = require('./Prompt.js');

var _Prompt2 = _interopRequireDefault(_Prompt);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _HistoryLine = require('./HistoryLine.js');

var _HistoryLine2 = _interopRequireDefault(_HistoryLine);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../styles');

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circle = (0, _reflexbox.reflex)(_styledComponents2.default.div(_templateObject, function (props) {
  return props.color;
}));

var CircleContainer = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3, _styles.font.family);
var ContentContainer = _styledComponents2.default.div(_templateObject4);

function mockSubmit(command) {
  if (command === 'lift') {
    return function () {
      return _react2.default.createElement(
        _Text2.default,
        { pl: 4 },
        'You lift the box up its heavy'
      );
    };
  } else {
    return function () {
      return _react2.default.createElement(
        _Text2.default,
        { pl: 4 },
        'unknown'
      );
    };
  }
}

function mockPromptChange(command) {
  return {
    isValid: command === 'lift',
    autocomplete: []
  };
}

var Terminal = function (_Component) {
  _inherits(Terminal, _Component);

  function Terminal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Terminal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Terminal.__proto__ || Object.getPrototypeOf(Terminal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      history: []
    }, _this.handleSubmit = function (value) {
      _this.setState({
        history: [].concat(_toConsumableArray(_this.state.history), [{ value: value, result: _this.props.onCommandSubmit(value) }])
      });
      _this.scrollToPrompt();
    }, _this.getDisplayInfo = function (value) {
      return {
        isValid: true,
        autocomplete: []
      };
    }, _this.focusPrompt = function () {
      _this.prompt.focus();
    }, _this.scrollToPrompt = function () {
      _this.contentContainer.scrollTop = _this.contentContainer.scrollHeight;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Terminal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reflexbox.Flex,
        { onClick: this.focusPrompt, column: true, style: this.styles },
        _react2.default.createElement(
          _reflexbox.Flex,
          { my: 1, justify: 'center', align: 'center' },
          _react2.default.createElement(
            Title,
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          CircleContainer,
          { p: 2 },
          _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.close }),
          _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.minimize }),
          _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.expand })
        ),
        _react2.default.createElement(
          ContentContainer,
          { innerRef: function innerRef(cc) {
              return _this2.contentContainer = cc;
            } },
          this.state.history.map(function (_ref2) {
            var value = _ref2.value,
                result = _ref2.result;
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _HistoryLine2.default,
                null,
                value
              ),
              (0, _utility.isFunction)(result) ? result() : _react2.default.createElement(
                _Text2.default,
                { pl: 2 },
                result
              )
            );
          }),
          _react2.default.createElement(_Prompt2.default, {
            onSubmit: this.handleSubmit,
            onChange: this.getDisplayInfo,
            ref: function ref(p) {
              return _this2.prompt = p;
            }
          })
        )
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return {
        height: this.props.height,
        width: this.props.width,
        background: 'black',
        borderRadius: '3px',
        border: '1px solid ivory',
        position: 'relative'
      };
    }

    // getDisplayInfo gets called everytime a new key is pressed.  It returns meta
    // data about the current command the user is trying to execute.  This

  }]);

  return Terminal;
}(_react.Component);

Terminal.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  title: _propTypes2.default.string,

  // onPromptChange gets called when user enters new keys.  It should return
  // an object with the signature: { isValid: Bool, autocomplete: Array }
  onPromptChange: _propTypes2.default.func,
  onCommandSubmit: _propTypes2.default.func
};
Terminal.defaultProps = {
  // Terminal Visual Customization
  width: '80%',
  height: '80%',
  title: 'wreck',

  // Callbacks
  onCommandSubmit: mockSubmit,
  onPromptChange: mockPromptChange
};
exports.default = Terminal;