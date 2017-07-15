import React from 'react';
import styled from 'styled-components'
import { font } from '../styles';
import { reflex } from 'reflexbox';

const Text = reflex(styled.p`
  font-family: ${font.family};
  color: ivory;
  margin: 0;
  font-size: ${font.termSize};
`);

export default Text;
