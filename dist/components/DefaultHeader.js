'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 50%;\n  background: ', ';\n  width: 10px;\n  height: 10px;\n'], ['\n  border-radius: 50%;\n  background: ', ';\n  width: 10px;\n  height: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 10px;\n  top: 12px;\n  display: flex;\n'], ['\n  position: absolute;\n  left: 10px;\n  top: 12px;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: ivory;\n  font-family: ', ';\n'], ['\n  color: ivory;\n  font-family: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reflexbox = require('reflexbox');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circle = (0, _reflexbox.reflex)(_styledComponents2.default.div(_templateObject, function (props) {
  return props.color;
}));

var CircleContainer = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3, _styles.font.family);

exports.default = function () {
  return _react2.default.createElement(
    _reflexbox.Flex,
    { my: 1, justify: 'center', align: 'center' },
    _react2.default.createElement(
      Title,
      null,
      'bash'
    ),
    _react2.default.createElement(
      CircleContainer,
      { p: 2 },
      _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.close }),
      _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.minimize }),
      _react2.default.createElement(Circle, { mr: 1, color: _styles.colors.expand })
    )
  );
};