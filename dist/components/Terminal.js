'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ' \n  overflow-y: scroll;\n'], ['\n  ', ' \n  overflow-y: scroll;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' \n  background: ', ';\n  border-radius: ', ';\n  position: relative;\n  display: flex;\n  flex-direction: column;\n'], ['\n  ', ' \n  background: ', ';\n  border-radius: ', ';\n  position: relative;\n  display: flex;\n  flex-direction: column;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Prompt = require('./Prompt.js');

var _Prompt2 = _interopRequireDefault(_Prompt);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _HistoryLine = require('./HistoryLine.js');

var _HistoryLine2 = _interopRequireDefault(_HistoryLine);

var _utility = require('../utility');

var _styles = require('../styles');

var _DefaultHeader = require('./DefaultHeader.js');

var _DefaultHeader2 = _interopRequireDefault(_DefaultHeader);

var _theme = require('../styles/theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Internal


// Defaults


var ContentContainer = _styledComponents2.default.div(_templateObject, _styles.fullyExpanded);

var TerminalContainer = _styledComponents2.default.div(_templateObject2, _styles.fullyExpanded, (0, _styles.term)('background'), (0, _styles.term)('radius'));

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
    }, _this.handleSubmit = function (input) {
      var output = _this.props.onCommandSubmit(input);
      _this.setState({
        history: [].concat(_toConsumableArray(_this.state.history), [{ input: input, output: output }])
      });
      _this.scrollToPrompt();
    }, _this.focusPrompt = function () {
      _this.prompt.focus();
    }, _this.scrollToPrompt = function () {
      _this.contentContainer.scrollTop = _this.contentContainer.scrollHeight;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Terminal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusPrompt();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          headerRenderer = _props.headerRenderer,
          onPromptChange = _props.onPromptChange,
          className = _props.className,
          contentClassName = _props.contentClassName,
          rest = _objectWithoutProperties(_props, ['theme', 'headerRenderer', 'onPromptChange', 'className', 'contentClassName']);

      var finalTheme = theme ? _extends({}, _theme2.default, theme) : _theme2.default;

      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: finalTheme },
        _react2.default.createElement(
          TerminalContainer,
          { onClick: this.focusPrompt, className: className },
          (0, _utility.isFunction)(headerRenderer) ? headerRenderer(finalTheme) : headerRenderer,
          _react2.default.createElement(
            ContentContainer,
            { className: contentClassName, innerRef: function innerRef(cc) {
                return _this2.contentContainer = cc;
              } },
            this.state.history.map(function (_ref2, i) {
              var input = _ref2.input,
                  output = _ref2.output;
              return _react2.default.createElement(
                'div',
                { key: input + i },
                _react2.default.createElement(
                  _HistoryLine2.default,
                  null,
                  input
                ),
                (0, _utility.isFunction)(output) ? output() : _react2.default.createElement(
                  _Text2.default,
                  { pl: 2 },
                  output
                )
              );
            }),
            _react2.default.createElement(_Prompt2.default, {
              onSubmit: this.handleSubmit,
              onChange: onPromptChange,
              ref: function ref(p) {
                return _this2.prompt = p;
              }
            })
          )
        )
      );
    }
  }]);

  return Terminal;
}(_react.Component);

Terminal.propTypes = {
  // Override the Terminal Header
  headerRenderer: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),

  // Override for the theme used
  theme: _theme.themeShape,

  // onPromptChange gets called when user enters new keys.  It should return
  // an object with the signature: { isValid: Bool, autocomplete: Array }
  onPromptChange: _propTypes2.default.func,
  onCommandSubmit: _propTypes2.default.func
};
Terminal.defaultProps = {
  headerRenderer: _DefaultHeader2.default
};
exports.default = Terminal;