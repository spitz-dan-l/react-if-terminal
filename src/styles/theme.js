import { font } from './index.js';
import { shape, string, number, oneOfType } from 'prop-types';

const defaultTheme = {
  term: {
    fontFamily: font.family,
    fontSize: '1em',
    fontColor: 'ivory',
    background: 'white',
    radius: 3,
  },
  prompt: {
    pwd: '>', // string used in prompt
  },
};

export const themeShape = shape({
  term: shape({
    fontFamily: string,
    fontSize: oneOfType([string, number]),
    fontColor: string,
    background: string,
    radius: oneOfType([string, number]),
  }),
  prompt: shape({
    pwd: string,
  }),
});

export default defaultTheme;
