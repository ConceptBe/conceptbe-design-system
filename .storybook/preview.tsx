import { Global, ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ResetStyles } from './ResetStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={ResetStyles} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
