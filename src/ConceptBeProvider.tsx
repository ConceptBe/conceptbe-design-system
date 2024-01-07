import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles } from './styles/globalStyles';
import Theme from './styles/theme';
import './assets/fonts/SUIT-Variable.css';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const ConceptBeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default ConceptBeProvider;
