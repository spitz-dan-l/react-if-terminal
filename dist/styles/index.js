'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = exports.term = exports.fullyExpanded = exports.font = exports.colors = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n'], ['\n  height: 100%;\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = exports.colors = {
  close: '#F04351',
  minimize: '#F8B532',
  expand: '#31DB3E'
};

var font = exports.font = {
  family: "'Fira Mono', 'monospace'",
  termSize: '1em'
};

var fullyExpanded = exports.fullyExpanded = (0, _styledComponents.css)(_templateObject);

// HOF that returns a HOF making it easier to access theme sections
function shortCutFor(attr) {
  return function (value) {
    return function (props) {
      return props.theme[attr][value];
    };
  };
}

var term = exports.term = shortCutFor('term');
var prompt = exports.prompt = shortCutFor('prompt');