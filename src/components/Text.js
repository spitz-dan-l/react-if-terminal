import React from 'react';
import styled from 'styled-components'
import { term } from '../styles';
import { reflex } from 'reflexbox';

const Text = reflex(styled.p`
  font-family: ${term('fontFamily')};
  font-size: ${term('fontSize')};
  color: ${term('fontColor')};
  margin: 0;
`);

export default Text;
