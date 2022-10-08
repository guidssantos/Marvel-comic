import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { AllRoutes } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </ThemeProvider>
);
