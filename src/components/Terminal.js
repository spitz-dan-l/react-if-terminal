import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, reflex } from 'reflexbox';
import styled, { ThemeProvider } from 'styled-components'

// Internal
import Prompt from './Prompt.js';
import Text from './Text.js';
import HistoryLine from './HistoryLine.js';
import { isFunction } from '../utility';
import { term, fullyExpanded } from '../styles';

// Defaults
import DefaultHeader from './DefaultHeader.js';
import defaultTheme, {themeShape} from '../styles/theme.js';

const ContentContainer = styled.div`
  ${fullyExpanded} 
  overflow-y: scroll;
`

const TerminalContainer = styled.div`
  ${fullyExpanded} 
  background: ${term('background')};
  border-radius: ${term('radius')};
  position: relative;
  display: flex;
  flex-direction: column;
`

class Terminal extends Component {
  state = {
    history: [],
  }

  static propTypes = {
    // Override the Terminal Header
    header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

    // Override for the theme used
    theme: themeShape,

    // onPromptChange gets called when user enters new keys.  It should return
    // an object with the signature: { isValid: Bool, autocomplete: Array }
    onPromptChange: PropTypes.func,
    onCommandSubmit: PropTypes.func,
  }

  static defaultProps = {
    header: DefaultHeader,
  }

  handleSubmit = value => {
    const result = this.props.onCommandSubmit(value);
    this.setState({
      history: [ ...this.state.history, { value, result } ]
    });
    this.scrollToPrompt();
  }

  focusPrompt = () => {
    this.prompt.focus();
  }

  scrollToPrompt = () => {
    this.contentContainer.scrollTop = this.contentContainer.scrollHeight;
  }

  render() {
    const { theme, header, onPromptChange } = this.props;
    const finalTheme = theme ? {...defaultTheme, ...theme} : defaultTheme;

    return (
      <ThemeProvider theme={finalTheme}>
        <TerminalContainer onClick={this.focusPrompt}>
          {isFunction(header) ? header() : header}

          <ContentContainer innerRef={cc => this.contentContainer = cc}>
            {this.state.history.map(({value, result}, i) => (
              <div key={value + i}>
                <HistoryLine>{value}</HistoryLine>
                {isFunction(result) 
                    ? result() 
                    : <Text pl={2}>{result}</Text>
                }
              </div>
            ))}

            <Prompt 
              onSubmit={this.handleSubmit} 
              onChange={onPromptChange}
              ref={p => this.prompt = p}
            />
          </ContentContainer>
        </TerminalContainer>
      </ThemeProvider>
    );
  }
}

export default Terminal;
