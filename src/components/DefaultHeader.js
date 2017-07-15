import React from 'react';
import { reflex, Flex, Box } from 'reflexbox';
import styled from 'styled-components'
import { term, colors } from '../styles';

const Circle = reflex(styled.div`
  border-radius: 50%;
  background: ${props => props.color};
  width: 10px;
  height: 10px;
`);

const CircleContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 12px;
  display: flex;
`

const Title = styled.div`
  color: ivory;
  font-family: ${term('fontFamily')};
`

export default () => (
  <Flex my={1} justify="center" align="center">
    <Title>bash</Title>

    <CircleContainer p={2}>
      <Circle mr={1} color={colors.close} />
      <Circle mr={1} color={colors.minimize} />
      <Circle mr={1} color={colors.expand} />
    </CircleContainer>
  </Flex>
);
