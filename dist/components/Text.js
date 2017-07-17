'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  color: ', ';\n  margin: 0;\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  color: ', ';\n  margin: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../styles');

var _reflexbox = require('reflexbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _reflexbox.reflex)(_styledComponents2.default.p(_templateObject, (0, _styles.term)('fontFamily'), (0, _styles.term)('fontSize'), (0, _styles.term)('fontColor')));

exports.default = Text;