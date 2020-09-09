import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import useSiteMetadata from '../hooks/useSiteMetadata';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['20']} ${props => props.theme.pageGutter};
  flex-shrink: 0;
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.theme.spacing['8']};

  .footer-icon {
    margin-right: ${props => props.theme.spacing['2']};
  }
`;

const FooterIcon = ({ icon }) => {
  return (
    <IconContext.Provider value={{ className: 'footer-icon', size: '1.2em' }}>
      {icon}
    </IconContext.Provider>
  );
};

FooterIcon.propTypes = {
  icon: PropTypes.node.isRequired,
};

const Footer = () => {
  const { github, twitter, instagram } = useSiteMetadata();

  return (
    <FooterWrapper>
      <div>
        <FooterLink href={github} target="_blank" rel="noopener noreferrer">
          <FooterIcon icon={<FaGithub />} /> Github
        </FooterLink>
        <FooterLink href={instagram} target="_blank" rel="noopener noreferrer">
          <FooterIcon icon={<FaInstagram />} /> Instagram
        </FooterLink>
        <FooterLink href={twitter} target="_blank" rel="noopener noreferrer">
          <FooterIcon icon={<FaTwitter />} /> Twitter
        </FooterLink>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
