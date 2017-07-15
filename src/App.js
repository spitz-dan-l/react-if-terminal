import React, { Component } from 'react';
import Terminal from './components/Terminal.js';
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Terminal />
      </Container>
    );
  }
}

export default App;
