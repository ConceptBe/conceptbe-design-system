import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { theme } from '.';
import App from './App';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
