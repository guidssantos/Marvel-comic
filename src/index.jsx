import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { Home } from './Pages/Home';
import { IndividualComic } from './Pages/IndividualComic';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <IndividualComic />
    </ThemeProvider>
  </React.StrictMode>
);
