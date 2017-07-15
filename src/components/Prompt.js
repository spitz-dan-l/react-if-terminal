import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components'
import Pwd from './Pwd.js';
import { font } from '../styles';
import { KEYS } from '../utility';

// TODO: allow users to pass in custom prompt strings

const InputText = styled.input`
  background: none;
  border: none;
  color: ivory;
  font-weight: bold;
  font-size: ${font.termSize};
  font-family: ${font.family};
  flex: 1;
  &:focus { outline: none; }
`

class Prompt extends Component {
  state = { value: '', meta: {} }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys)
  }

  handleKeys = ({keyCode}) => {
    if (keyCode === KEYS.enter && this.state.meta.isValid) {
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
  }

  handleChange = ({target:{value}}) => {
    const meta = this.props.onChange(value)
    this.setState({value: value, meta});
  }

  focus = () => {
    this.input.focus();
  }

  render() {
    return (
      <Flex>
        <Pwd mx={1} />
        <InputText 
          onChange={this.handleChange} 
          type="text" 
          value={this.state.value}
          innerRef={i => this.input = i}
        />
      </Flex>
    );
  }
}

export default Prompt;
