import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import techMap from '../../config/techMap';
import Img from './image';

const TechIconStyles = styled.ul`
  display: flex;
  font-size: ${props => props.theme.fontSize.sm};

  li {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    grid-gap: ${props => props.theme.spacing['1']};
    margin-right: ${props => props.theme.spacing['5']};
  }
`;

const TechIcons = ({ techNames }) => {
  // 1. gather all available tech icons for our list of tech names
  const icons = techNames
    .filter(techName => techMap[techName] && techMap[techName].icon)
    .map(techName => {
      const { icon: Icon, label } = techMap[techName];
      return (
        <li key={techName}>
          <Icon size="2.2em" /> {label}
        </li>
      );
    });

  // * no icons available for the list of tech names so nothing to render
  if (!icons.length) return null;

  // 2. display the icons
  return <TechIconStyles>{icons}</TechIconStyles>;
};

TechIcons.propTypes = {
  techNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ProjectCard = ({
  header,
  description,
  slug,
  url,
  github,
  codesandbox,
  previewImage,
  previewImageAlt,
  techUsed,
}) => {
  return (
    <div>
      {previewImage && (
        <Img
          rounded
          shadow
          fluid={{
            ...previewImage.childImageSharp.fluid,
            sizes: `(min-width: 1500px) 400px, (min-width: 1421px) 33vw, (min-width: 831px) 50vw, 100vw`,
          }}
          alt={previewImageAlt}
        />
      )}
      <h3>{header}</h3>
      {techUsed.length && <TechIcons techNames={techUsed} />}
      <p>{description}</p>
      <ul>
        {slug && (
          <li>
            <Link to={`/${slug}`}>Case Study</Link>
          </li>
        )}
        {url && (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url.replace(/https?:\/\//, '')}
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
        )}
        {codesandbox && (
          <li>
            <a href={codesandbox} target="_blank" rel="noopener noreferrer">
              codesandbox
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

ProjectCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  slug: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
  codesandbox: PropTypes.string,
  previewImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    }),
  }),
  previewImageAlt: PropTypes.string,
  techUsed: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  description: PropTypes.string,
  slug: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
  codesandbox: PropTypes.string,
  previewImage: null,
  previewImageAlt: PropTypes.string,
  techUsed: [],
};

export default ProjectCard;
