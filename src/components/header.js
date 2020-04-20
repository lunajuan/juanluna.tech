import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeaderWrapper = styled.header`
  border: 1px solid red;
`;

const NavWrapper = styled.nav`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  color: lightcoral;
`;

const SiteLinks = styled.div`
  border: 1px solid green;
`;

const SiteLink = styled(Link)`
  background-color: lightskyblue;
`;

const Header = ({ siteTitle, headerImage = true }) => {
  const { profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "images/photo.jpg" }) {
        childImageSharp {
          fixed(width: 100, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
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
            <Img fixed={profileImage.childImageSharp.fixed} alt="Juan Luna Ramirez" />
          )}
          <span>{siteTitle}</span>
        </HeaderLink>

        <SiteLinks>
          <SiteLink to="/magma-products">Magma Products</SiteLink>
        </SiteLinks>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
