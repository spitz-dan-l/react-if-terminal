import React from 'react';
import { storiesOf } from '@storybook/react';
import { Terminal } from '../src';
import Text from '../src/components/Text.js';
import { Flex, Box } from 'reflexbox';

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
  .add('Custom Header Function', () => (
    <Terminal 
      onCommandSubmit={mockSubmit}
      onPromptChange={mockPromptChange}
      headerRenderer={(theme) => (
        <p style={{textAlign: 'center', color: 'white', fontFamily: theme.term.fontFamily}}>Custom Header!</p>
      )}
    />
  ))
  .add('Custom Header Comp', () => (
    <Terminal 
      onCommandSubmit={mockSubmit}
      onPromptChange={mockPromptChange}
      headerRenderer={
        <Flex justify="center" align="center">
          <span style={{color: 'white'}}>My Awesome Game!</span>
        </Flex>
      }
    />
  ))
  .add('Custom Theme', () => (
    <Terminal
      onCommandSubmit={mockSubmit}
      onPromptChange={mockPromptChange}
      theme={{
        term: {
          fontFamily: 'cursive',
          fontColor: 'black',
          background: 'white',
        },
        prompt: {
          pwd: '$  ~',
        }
      }}
    />
  ))
