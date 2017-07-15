import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Pwd from './Pwd.js';
import Text from './Text.js';
import { isFunction } from '../utility';
import { Flex } from 'reflexbox';

class HistoryLine extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <Flex>
        <Pwd mx={1} />
        {isFunction(children) 
            ? children()
            : <Text>{children}</Text>
        }
      </Flex>
    );
  }
}

export default HistoryLine;
