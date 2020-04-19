import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import useProjects from '../hooks/useProjects';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${props => props.theme.spacing['6']};
`;

const Card = styled.div`
  margin: 0;
`;

export default () => {
  const projects = useProjects();

  return (
    <Layout>
      <div>Hello world!</div>
      <Grid>
        {projects.map(project => (
          <Card>
            {project.coverImage && (
              <Img
                fluid={project.coverImage.image.childImageSharp.fluid}
                alt={project.coverImage.alt}
              />
            )}
            <h2>{project.title}</h2>
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
          </Card>
        ))}
      </Grid>
    </Layout>
  );
};
