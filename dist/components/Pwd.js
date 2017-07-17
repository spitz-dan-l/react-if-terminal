'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', '\n  font-size: ', '\n'], ['\n  color: ', ';\n  font-family: ', '\n  font-size: ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pwd = (0, _reflexbox.reflex)(_styledComponents2.default.div(_templateObject, (0, _styles.term)('fontColor'), (0, _styles.term)('fontFamily'), (0, _styles.term)('fontSize')));

exports.default = (0, _styledComponents.withTheme)(function (props) {
  return _react2.default.createElement(
    Pwd,
    props,
    props.theme.prompt.pwd
  );
});