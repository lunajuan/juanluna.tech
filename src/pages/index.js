import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from '../components/image';
import Layout from '../components/Layout';
import useProjects from '../hooks/useProjects';
import Hero from '../styles/hero';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${props => props.theme.spacing['6']};
`;

const Card = styled.div`
  margin: 0;
`;

const ProfileImage = styled(Img)`
  max-width: 200px;

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 300px;
  }
`;

const HeroTextWrapper = styled.div``;

export default ({ data: { profileImage } }) => {
  const projects = useProjects();

  return (
    <Layout>
      <Hero halfSplitLayout>
        <ProfileImage
          circle
          fluid={{
            ...profileImage.childImageSharp.fluid,
            sizes: '(min-width: 1024px) 300px,200px',
          }}
          alt="Juan's profile image"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <HeroTextWrapper>
          <h1>Juan Luna Ramirez</h1>
          <p>Hi, I'm a web developer from Los Angeles, CA</p>
        </HeroTextWrapper>
      </Hero>

      <Grid>
        {projects.map(project => (
          <Card>
            {project.coverImage && (
              <Img
                rounded
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

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
