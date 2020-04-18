import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const Header = styled.header`
  padding: ${props => props.theme.spacing['10']} 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.spacing['4']};
  justify-items: center;

  @media (min-width: ${props => props.theme.screen.md}) {
    grid-gap: ${props => props.theme.spacing['6']};
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.spacing['12']};
    align-items: center;
  }

  h1 {
    text-align: center;
    margin: ${props => props.theme.spacing['10']} 0;
    font-size: ${props => props.theme.fontSize['5xl']};

    @media (min-width: ${props => props.theme.screen.md}) {
      text-align: left;
      font-size: ${props => props.theme.fontSize['6xl']};
    }
  }

  p {
    max-width: 35em;
  }

  .gatsby-image-wrapper {
    width: 100%;
    border-radius: ${props => props.theme.borderRadius.default};
    box-shadow: ${props => props.theme.boxShadow.default};

    @media (min-width: ${props => props.theme.screen.md}) {
      display: block;
    }

    img {
      margin: 0;
    }
  }
`;

const Body = styled.div`
  section {
    /* we have to fight off the gutter created by the padding on main since we
    want to have the background color extend 100vw */
    margin: 0 -${props => props.theme.pageGutter};
    padding: ${props => props.theme.spacing['10']} ${props => props.theme.pageGutter};

    @media (min-width: ${props => props.theme.screen.lg}) {
      border-radius: ${props => props.theme.borderRadius.default};
      margin: 0;
      padding-left: ${props => props.theme.spacing['16']};
      padding-right: ${props => props.theme.spacing['16']};
    }

    &:nth-child(odd) {
      background-color: ${props => props.theme.background.light};
    }
  }

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
          childImageSharp {
            fluid(maxWidth: 1600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const CaseStudyTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <Header>
        <div>
          <h1>{project.frontmatter.title}</h1>
          <p>{project.frontmatter.description}</p>
        </div>
        {project.frontmatter.coverImage && (
          <Img
            fluid={{
              ...project.frontmatter.coverImage.childImageSharp.fluid,
              sizes: '(max-width: 1500px) 700w, (min-width: 1024px) 50vw, 100vw',
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
        )}
      </Header>
      <Body>
        <MDXRenderer>{project.body}</MDXRenderer>
      </Body>
    </Layout>
  );
};

export default CaseStudyTemplate;
