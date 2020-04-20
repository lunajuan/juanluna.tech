import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/useSiteMetadata';

const FooterWrapper = styled.footer`
  border: 1px solid red;
`;

const Footer = () => {
  const { github, twitter, instagram } = useSiteMetadata();

  return (
    <FooterWrapper>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
