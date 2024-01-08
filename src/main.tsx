import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { theme } from '.';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
