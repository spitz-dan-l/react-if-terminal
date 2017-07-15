import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt.js';
import Text from './Text.js';
import HistoryLine from './HistoryLine.js';
import { Flex, Box, reflex } from 'reflexbox';
import styled from 'styled-components'
import { isFunction } from '../utility';
import DefaultHeader from './DefaultHeader.js';

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`

class Terminal extends Component {
  state = {
    history: [],
  }

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    header: PropTypes.node,

    // onPromptChange gets called when user enters new keys.  It should return
    // an object with the signature: { isValid: Bool, autocomplete: Array }
    onPromptChange: PropTypes.func,
    onCommandSubmit: PropTypes.func,
  }

  static defaultProps = {
    width: '80%',
    height: '80%',
    header: DefaultHeader,
  }

  get styles() {
    return {
      height: this.props.height,
      width: this.props.width,
      background: 'black',
      borderRadius: '3px',
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

  handlePromptChange = value => {
    // { isValid: true, autcomplete: [] }
    return this.props.onPromptChange(value)
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
        {this.props.header()}


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
            onChange={this.handlePromptChange}
            ref={p => this.prompt = p}
          />
        </ContentContainer>
      </Flex>
    );
  }
}

export default Terminal;
