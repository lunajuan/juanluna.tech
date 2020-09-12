import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: ${theme.fontFamily.openSans} ${theme.fontFamily.sans};
    color: ${theme.text.primary};
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: ${theme.spacing['4']};
  }

  body {
    margin: 0;

    font-size: ${theme.fontSize.base};
    line-height: ${theme.lineHeight.relaxed};

    @media (min-width: 768px) {
      font-size: ${theme.fontSize.lg};
      line-height: ${theme.lineHeight.normal};
    }

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
    font-family: ${theme.fontFamily.poppins};
    font-weight: ${theme.fontWeight.bold};
    font-style: italic;
    line-height: ${theme.lineHeight.tight};

    + * {
      margin-top: ${theme.spacing['2']};
    }
  }

  h2 {
    font-size: ${theme.fontSize['2xl']};

    @media (min-width: ${theme.screen.md}) {
      font-size: ${theme.fontSize['4xl']};
    }

    + * {
      margin-top: ${theme.spacing['10']};
    }
  }

  h3 {
    font-size: ${theme.fontSize.lg};

    @media (min-width: ${theme.screen.md}) {
      font-size: ${theme.fontSize.xl};
    }
  }

  p {
    max-width: 35em;
  }

  li {
    margin-top: ${theme.spacing['1']};
  }

  a {
    color: ${theme.text.primary};
    text-decoration: none;

    /* TODO: improve outline brand */
  }

  nav a, footer a {
    color: ${theme.green};
  }

  p a, li a{
    position: relative;

    &:before {
      position: absolute;
      background: ${theme.green};
      content: '';
      width: 100%;
      height: 2px;
      bottom: 0;
      z-index: -1;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ::selection {
    background: ${theme.yellow};
  }

  /* TODO: add global image styles */
`;

export default GlobalStyles;
