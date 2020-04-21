import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Img from '../components/image';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Hero from '../styles/hero';
import Section from '../components/section';

const Body = styled.div`
  h2,
  h3 {
    font-weight: ${props => props.theme.fontWeight.bold};
    margin: ${props => props.theme.spacing['2']} 0;
  }

  h2 {
    font-size: ${props => props.theme.fontSize['2xl']};

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: ${props => props.theme.fontSize['4xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSize.lg};

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: ${props => props.theme.fontSize.xl};
    }
  }

  p {
    max-width: 35em;
    margin: 0 auto ${props => props.theme.spacing['10']};
    font-size: ${props => props.theme.fontSize.base};
    line-height: ${props => props.theme.lineHeight.relaxed};
  }

  .subtitle {
    color: ${props => props.theme.text.secondary};
    margin: 0;
    font-weight: ${props => props.theme.fontWeight.normal};
  }

  .reverse-order {
    display: flex;
    flex-direction: column-reverse;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${props => props.theme.spacing['12']};
    align-items: start;

    @media (min-width: ${props => props.theme.screen.md}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-item {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--screenshot {
      align-self: center;
      img,
      .gatsby-resp-image-wrapper,
      .gatsby-resp-image-background-image {
        border-radius: ${props => props.theme.borderRadius.default};
        box-shadow: ${props => props.theme.boxShadow.default};
      }
    }
  }
`;

// gatsby-node api will pass in slug from context data as graphql variable.
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        coverImage {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
        gallery {
          image {
            id
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
          caption
        }
      }
      body
    }
  }
`;

const CaseStudyTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <Hero halfSplitLayout={!!project.frontmatter.coverImage}>
        <div>
          <h1>{project.frontmatter.title}</h1>
          <p>{project.frontmatter.description}</p>
        </div>
        {project.frontmatter.coverImage && (
          <Img
            rounded
            shadow
            alt={project.frontmatter.coverImage.alt || null}
            fluid={{
              ...project.frontmatter.coverImage.image.childImageSharp.fluid,
              sizes: '(min-width: 1500px) 700w, (min-width: 1024px) 50vw, 100vw',
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
        )}
      </Hero>
      <Body>
        <MDXRenderer>{project.body}</MDXRenderer>
        {project.frontmatter.gallery.length && (
          <Section id="screenshots">
            <h2>Screenshots</h2>
            <Gallery images={project.frontmatter.gallery} />
          </Section>
        )}
      </Body>
    </Layout>
  );
};

export default CaseStudyTemplate;
