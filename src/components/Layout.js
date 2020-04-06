import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  text: {
    primary: '#1A202C',
    secondary: '#718096',
  },
  fontFamily: {
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  fontSize: {
    xs: '1.2rem',
    sm: '1.4rem',
    base: '1.6rem',
    lg: '1.8rem',
    xl: '2rem',
    '2xl': '2.4rem',
    '3xl': '3rem',
    '4xl': '3.6rem',
    '5xl': '4.8rem',
    '6xl': '6.4rem',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  spacing: {
    '1': '0.4rem',
    '2': '0.8rem',
    '3': '1.2rem',
    '4': '1.6rem',
    '5': '2rem',
    '6': '2.4rem',
    '8': '3.2rem',
    '10': '4rem',
    '12': '4.8rem',
    '16': '6.4rem',
    '20': '8rem',
    '24': '9.6rem',
    '32': '12.8rem',
    '40': '16rem',
    '48': '19.2rem',
    '56': '22.4rem',
    '64': '25.6rem',
  },
};

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: ${props => props.theme.fontFamily.sans};
    color: ${props => props.theme.text.primary};
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: ${props => props.theme.spacing['4']};
  }

  body {
    margin: 0;

    font-size: ${props => props.theme.fontSize.base};
    line-height: ${props => props.theme.lineHeight.normal};

    /* remove margin for main div that gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h6 {
    line-height: ${props => props.theme.lineHeight.tight};

    + * {
      margin-top: ${props => props.theme.spacing['2']};
    }
  }

  li {
    margin-top: ${props => props.theme.spacing['1']};
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <header />
    <main>{children}</main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
