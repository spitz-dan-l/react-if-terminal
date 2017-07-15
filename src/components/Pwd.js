import React from 'react';
import { reflex } from 'reflexbox';
import styled from 'styled-components'
import { font } from '../styles';

const Pwd = reflex(styled.div`
  color: ivory;
  font-family: ${font.family}
`);

export default (props) => <Pwd {...props}>> </Pwd>;
