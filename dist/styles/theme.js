'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeShape = undefined;

var _index = require('./index.js');

var _propTypes = require('prop-types');

var defaultTheme = {
  term: {
    fontFamily: _index.font.family,
    fontSize: '1em',
    fontColor: 'ivory',
    background: 'black',
    radius: 3
  },
  prompt: {
    pwd: '>' // string used in prompt
  }
};

var themeShape = exports.themeShape = (0, _propTypes.shape)({
  term: (0, _propTypes.shape)({
    fontFamily: _propTypes.string,
    fontSize: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]),
    fontColor: _propTypes.string,
    background: _propTypes.string,
    radius: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
  }),
  prompt: (0, _propTypes.shape)({
    pwd: _propTypes.string
  })
});

exports.default = defaultTheme;