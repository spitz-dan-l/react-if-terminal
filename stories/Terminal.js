import React from 'react';
import { storiesOf } from '@storybook/react';
import { Terminal } from '../src';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

storiesOf('Basic Terminal', module)
  .add('Default', () => (
    <Container>
      <Terminal />
    </Container>
  ))
