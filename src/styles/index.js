import { css } from 'styled-components';

export const colors = {
  close: '#F04351',
  minimize: '#F8B532',
  expand: '#31DB3E',
};

export const font = {
  family: "'Fira Mono', 'monospace'",
  termSize: '1em',
};

export const fullyExpanded = css`
  height: 100%;
  width: 100%;
`

// HOF that returns a HOF making it easier to access theme sections
function shortCutFor(attr) {
  return value => {
    return props => {
      return props.theme[attr][value];
    }
  }
}

export const term = shortCutFor('term');
export const prompt = shortCutFor('prompt');

