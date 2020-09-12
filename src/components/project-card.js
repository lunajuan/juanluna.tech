import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import techMap from '../../config/techMap';
import Img from './image';

const ImgLink = ({ children, gatsbyLink = false, to }) => {
  if (gatsbyLink) return <Link to={to}>{children}</Link>;
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

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
        <li>
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

const ProjectCard = ({ project }) => {
  const imageHref = project.slug || project.github || project.codesandbox || project.url;

  return (
    <div>
      {project.imageFileName && (
        <ImgLink to={project.slug ? `/${project.slug}` : imageHref} gatsbyLink={project.slug}>
          <Img
            rounded
            shadow
            fluid={{
              ...project.imageFileName.childImageSharp.fluid,
              sizes: `(min-width: 1500px) 400px, (min-width: 1421px) 33vw, (min-width: 831px) 50vw, 100vw`,
            }}
            alt={project.imageAlt}
          />
        </ImgLink>
      )}
      <h3>{project.header}</h3>
      {project.tech && <TechIcons techNames={project.tech} />}
      <p>{project.description}</p>
      <ul>
        {project.slug && (
          <li>
            <Link to={`/${project.slug}`}>Case Study</Link>
          </li>
        )}
        {project.url && (
          <li>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url.replace(/https?:\/\//, '')}
            </a>
          </li>
        )}
        {project.github && (
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
        )}
        {project.codesandbox && (
          <li>
            <a href={project.codesandbox} target="_blank" rel="noopener noreferrer">
              codesandbox
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectCard;
