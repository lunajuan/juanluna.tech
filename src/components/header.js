import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  max-width: ${props => props.theme.pageMaxWidth.outer};
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1500px) {
    margin-bottom: ${props => props.theme.spacing['6']};
  }
`;

const NavWrapper = styled.nav`
  padding: ${props => props.theme.spacing['4']} ${props => props.theme.spacing['6']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-direction: row;
  }
`;

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.text.primary};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.lg};
  margin: ${props => props.theme.spacing['4']} 0;

  @media (min-width: ${props => props.theme.screen.md}) {
    margin: 0;
  }

  img {
    display: block;
    margin-right: ${props => props.theme.spacing['2']};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  span {
    margin: 0;
  }
`;

const SiteLinks = styled.div`
  margin: ${props => props.theme.spacing['4']} 0;
  font-family: ${props => props.theme.fontFamily.poppins};
`;

const SiteLink = styled(Link)`
  margin-left: ${props => props.theme.spacing['8']};
`;

const Header = ({ siteTitle, headerImage = true }) => {
  const { profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "images/photo.jpg" }) {
        childImageSharp {
          fixed(width: 50, quality: 90) {
            src
          }
        }
      }
    }
  `);

  return (
    <HeaderWrapper>
      <NavWrapper>
        <HeaderLink to="/" aria-label="go to homepage">
          {headerImage && (
            <img src={profileImage.childImageSharp.fixed.src} alt="Juan Luna Ramirez" />
          )}
          <span>{siteTitle}</span>
        </HeaderLink>

        <SiteLinks>
          <SiteLink to="/magma-products">Magma Products</SiteLink>
          <SiteLink to="/#projects">Projects</SiteLink>
          <SiteLink to="/cms-react-demo-case-study">Art</SiteLink>
        </SiteLinks>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
