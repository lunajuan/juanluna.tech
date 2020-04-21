import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/useSiteMetadata';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['20']} ${props => props.theme.pageGutter};
`;

const FooterLink = styled.a`
  margin-left: ${props => props.theme.spacing['8']};
`;

const Footer = () => {
  const { github, twitter, instagram } = useSiteMetadata();

  return (
    <FooterWrapper>
      <div>
        <FooterLink href={github} target="_blank" rel="noopener noreferrer">
          Github
        </FooterLink>
        <FooterLink href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </FooterLink>
        <FooterLink href={twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </FooterLink>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
