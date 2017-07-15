import React from 'react';
import { configure } from '@storybook/react';

const req = require.context('.', true, /\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
