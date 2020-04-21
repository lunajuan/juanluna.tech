import React from 'react';
import { Link } from 'gatsby';
import Img from './image';

const ProjectCard = ({ project }) => {
  return (
    <div>
      {project.coverImage && (
        <Img
          rounded
          fluid={project.coverImage.image.childImageSharp.fluid}
          alt={project.coverImage.alt}
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.slug && (
          <li>
            <Link to={project.slug}>Case Study</Link>
          </li>
        )}
        {project.url && (
          <li>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
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
