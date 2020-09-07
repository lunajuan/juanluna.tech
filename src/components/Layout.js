import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import 'typeface-poppins';
import 'typeface-open-sans';
import useSiteMetadata from '../hooks/useSiteMetadata';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from './Seo';
import Header from './header';
import Footer from './footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.pageMaxWidth.outer};
  flex: 1 0 auto;
`;

const Layout = ({ children, headerImage }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Seo />
        <Wrapper>
          <Header siteTitle={title} headerImage={headerImage} />
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
