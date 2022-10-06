import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

renderTheme.propTypes = {
    children: PropTypes.node.isRequired,
}



