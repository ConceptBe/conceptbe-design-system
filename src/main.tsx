import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { theme } from '.';
import App from './App';
import { GlobalStyles } from './styles/globalStyles';

import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <App />
  </ThemeProvider>,
);
