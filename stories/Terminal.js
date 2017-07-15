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

function mockSubmit(command) {
  if (command === 'lift') {
    return () => (
      <Text pl={4}>
        You lift the box up its heavy
      </Text>
    );
  } else {
    return () => <Text pl={4}>unknown</Text>
  }
}

function mockPromptChange(command) {
  return {
    isValid: command === 'lift',
    autocomplete: []
  }
}

storiesOf('Basic Terminal', module)
  .add('Default', () => (
    <Container>
      <Terminal 
        onCommandSubmit={mockSubmit}
        onPromptChange={mockPromptChange}
      />
    </Container>
  ))
