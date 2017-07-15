import React from 'react';
import { reflex } from 'reflexbox';
import styled, {withTheme} from 'styled-components'
import { term, prompt } from '../styles';

const Pwd = reflex(styled.div`
  color: ${term('fontColor')};
  font-family: ${term('fontFamily')}
  font-size: ${term('fontSize')}
`);

export default withTheme((props) => (
  <Pwd {...props}>
    {props.theme.prompt.pwd}
  </Pwd>
));
