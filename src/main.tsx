import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { theme } from '.';
import App from './App';
import './styles/reset.css';
import { GlobalStyles } from './styles/globalStyles';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <App />
  </ThemeProvider>,
);
