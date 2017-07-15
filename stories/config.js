import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const req = require.context('.', true, /\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(story => (
  <Container>
    {story()}
  </Container>
));

configure(loadStories, module);
