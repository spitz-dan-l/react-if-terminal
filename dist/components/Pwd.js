'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ivory;\n  font-family: ', '\n'], ['\n  color: ivory;\n  font-family: ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pwd = (0, _reflexbox.reflex)(_styledComponents2.default.div(_templateObject, _styles.font.family));

exports.default = function (props) {
  return _react2.default.createElement(
    Pwd,
    props,
    '> '
  );
};