import React from 'react';
import { storiesOf } from '@storybook/react';
import { Terminal } from '../src';
import { Text } from '../src/components/Text.js';

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
    <Terminal 
      onCommandSubmit={mockSubmit}
      onPromptChange={mockPromptChange}
    />
  ))
  // TODO: add theme object as argument to the header
  .add('Custom Header', () => (
    <Terminal 
      onCommandSubmit={mockSubmit}
      onPromptChange={mockPromptChange}
      header={(theme) => (
        <p style={{color: 'white'}}>Custom Header!</p>
      )}
    />
  ))
