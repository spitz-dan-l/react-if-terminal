import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt.js';
import Text from './Text.js';
import HistoryLine from './HistoryLine.js';
import { Flex, Box, reflex } from 'reflexbox';
import styled from 'styled-components'
import { font, colors } from '../styles';
import { isFunction } from '../utility';

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
  font-family: ${font.family};
`
const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
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

class Terminal extends Component {
  state = {
    history: [],
  }

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,

    // onPromptChange gets called when user enters new keys.  It should return
    // an object with the signature: { isValid: Bool, autocomplete: Array }
    onPromptChange: PropTypes.func,
    onCommandSubmit: PropTypes.func,
  }

  static defaultProps = {
    // Terminal Visual Customization
    width: '80%',
    height: '80%',
    title: 'wreck',

    // Callbacks
    onCommandSubmit: mockSubmit,
    onPromptChange: mockPromptChange,
  }

  get styles() {
    return {
      height: this.props.height,
      width: this.props.width,
      background: 'black',
      borderRadius: '3px',
      border: '1px solid ivory',
      position: 'relative',
    }
  }

  handleSubmit = value => {
    this.setState({
      history: [
        ...this.state.history, 
        { value, result: this.props.onCommandSubmit(value) },
      ]
    });
    this.scrollToPrompt();
  }

  // getDisplayInfo gets called everytime a new key is pressed.  It returns meta
  // data about the current command the user is trying to execute.  This
  getDisplayInfo = value => {
    return {
      isValid: true,
      autocomplete: [],
    }
  }

  focusPrompt = () => {
    this.prompt.focus();
  }

  scrollToPrompt = () => {
    this.contentContainer.scrollTop = this.contentContainer.scrollHeight;
  }

  render() {
    return (
      <Flex onClick={this.focusPrompt} column style={this.styles}>
        <Flex my={1} justify="center" align="center">
          <Title>{this.props.title}</Title>
        </Flex>

        <CircleContainer p={2}>
          <Circle mr={1} color={colors.close} />
          <Circle mr={1} color={colors.minimize} />
          <Circle mr={1} color={colors.expand} />
        </CircleContainer>

        <ContentContainer innerRef={cc => this.contentContainer = cc}>
          {this.state.history.map(({value, result}) => (
            <div>
              <HistoryLine>{value}</HistoryLine>
              {isFunction(result) 
                  ? result() 
                  : <Text pl={2}>{result}</Text>
              }
            </div>
          ))}

          <Prompt 
            onSubmit={this.handleSubmit} 
            onChange={this.getDisplayInfo}
            ref={p => this.prompt = p}
          />
        </ContentContainer>
      </Flex>
    );
  }
}

export default Terminal;
