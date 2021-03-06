import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from '../components/image';
import Layout from '../components/Layout';
import useProjects from '../hooks/useProjects';
import Hero from '../styles/hero';
import Section from '../components/section';
import ProjectCard from '../components/project-card';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.spacing['16']};

  @media (min-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-gap: ${props => props.theme.spacing['32']};
  }

  div {
    margin: 0;
  }
`;

const ProfileImage = styled(Img)`
  max-width: 200px;

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 300px;
  }
`;

const Home = ({ data: { profileImage } }) => {
  const projects = useProjects();

  return (
    <Layout headerImage={false}>
      <Hero halfSplitLayout breakpoint="768px">
        <ProfileImage
          circle
          fluid={{
            ...profileImage.childImageSharp.fluid,
            sizes: '(min-width: 1024px) 300px,200px',
          }}
          alt="Juan's profile image"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <div className="hero-text">
          <h1>Hi, I'm Juan Luna Ramirez</h1>
          <p>I'm a full Stack JavaScript developer from Los Angeles, CA.</p>
        </div>
      </Hero>

      <Section id="projects">
        <h2>Projects</h2>
        <Grid>
          {projects.map(
            ({
              id,
              header,
              description,
              slug,
              url,
              github,
              codesandbox,
              imageFileName,
              imageAlt,
              tech,
            }) => {
              return (
                <ProjectCard
                  key={id}
                  header={header}
                  description={description}
                  slug={slug}
                  url={url}
                  github={github}
                  codesandbox={codesandbox}
                  previewImage={imageFileName}
                  previewImageAlt={imageAlt}
                  techUsed={tech}
                />
              );
            }
          )}
        </Grid>
      </Section>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    profileImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
      }),
    }),
  }).isRequired,
};

export default Home;

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
