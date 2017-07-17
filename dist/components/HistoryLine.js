'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Pwd = require('./Pwd.js');

var _Pwd2 = _interopRequireDefault(_Pwd);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _utility = require('../utility');

var _reflexbox = require('reflexbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryLine = function (_Component) {
  _inherits(HistoryLine, _Component);

  function HistoryLine() {
    _classCallCheck(this, HistoryLine);

    return _possibleConstructorReturn(this, (HistoryLine.__proto__ || Object.getPrototypeOf(HistoryLine)).apply(this, arguments));
  }

  _createClass(HistoryLine, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        _reflexbox.Flex,
        null,
        _react2.default.createElement(_Pwd2.default, { mx: 1 }),
        (0, _utility.isFunction)(children) ? children() : _react2.default.createElement(
          _Text2.default,
          null,
          children
        )
      );
    }
  }]);

  return HistoryLine;
}(_react.Component);

HistoryLine.propTypes = {
  children: _propTypes2.default.node.isRequired
};
exports.default = HistoryLine;