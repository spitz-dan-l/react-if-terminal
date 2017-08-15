import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components'
import Pwd from './Pwd.js';
import { term, prompt } from '../styles';
import { KEYS } from '../utility';
import Autocomplete from 'react-autocompletely'


const Item = styled.div`
    cursor: pointer;
    display: block;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    color: rgba(0,0,0,.87);
    font-size: 1rem;
    text-transform: none;
    font-weight: 400;
    box-shadow: none;
    padding: .8rem 1.1rem;
    box-sizing: border-box;
    white-space: normal;
    word-wrap: normal;
`
//   ({isActive, isSelected}) => ({
//     backgroundColor: isActive ? 'lightgrey' : 'white',
//     fontWeight: isSelected ? 'bold' : 'normal',
//     '&:hover, &:focus': {
//       borderColor: '#96c8da',
//       boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
//     },
//   })
// )

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  position: absolute;
  left: -16px;
  top: 0;
  width: 0px;
  height: 0px;
  background: transparent;
  border: none
  color: transparent;
  outline: none;
  padding: 0;
  resize: none;
  z-index: -1;
  overflow: hidden;
`

const InputDisplay = styled.div`
  fontSize: 14;
  word-wrap break-word;
  line-height: 1em;
  outline: 0;
  white-space: normal;
  minheight: 2em;
  min-width: 10em;
  background: #fff;
  display: inline-block;
  padding: .5em 2em .5em 1em;
  color: rgba(0,0,0,.87);
  box-shadow: none;
  border: 1px solid rgba(34,36,38,.15);
  transition: box-shadow .1s ease,width .1s ease;
  margin: 0;
  margin-bottom: -2px;
`
class Prompt extends Component {
  state = { currentLine: '', value: '', meta: {} }; //meta is an object with isValid bool, and autocomplete array

  static defaultProps = {
    renderInputText: (value) => value
  }

  handleSubmit = value => {
    // could argue isValid check is not necessary
    // if (this.state.meta.isValid) {
      this.props.onSubmit(this.state.value);
      this.setState({value: '', currentLine: value});
    // }
  }

  // when key down is called by auto complete see if we should just submit
  handleKeys = ({keyCode}) => {
    if (keyCode === KEYS.enter && this.state.meta.isValid) {
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
    this.setCursor(this.input, this.input.value.length);
  }

  handleChange = (value) => {
    const meta = this.props.onChange(value)
    this.setState({value: value, meta});
  }

  focus = () => {
    this.input.focus();
  }

  setCursor = (node,pos) => {
      node = (typeof node == "string" || node instanceof String) ? document.getElementById(node) : node;

      if(!node){
          return false;
      }else if(node.createTextRange){
          var textRange = node.createTextRange();
          textRange.collapse(true);
          textRange.moveEnd(pos);
          textRange.moveStart(pos);
          textRange.select();
          return true;
      }else if(node.setSelectionRange){
          node.setSelectionRange(pos,pos);
          return true;
      }

      return false;
  }

  renderInputText = (value) => {
    if (this.props.renderInputText !== undefined) {
      return this.props.renderInputText(value);  
    }
    return value;
  }

  render() {
    const items = ['horse', 'apples', 'horseapples', 'appleapplehorses'];
    return (
      <Flex>
        <Pwd mx={1} />
        <InputWrapper onClick={() => this.focus()}>
          <Input onChange={this.handleChange} onKeyDown={this.handleKeys} value={this.state.value} innerRef={i => this.input = i} />
          <InputDisplay>{this.state.currentLine} {this.renderInputText(this.state.value)}[]</InputDisplay>
        </InputWrapper>
      </Flex>
    );
  }
}

export default Prompt;
