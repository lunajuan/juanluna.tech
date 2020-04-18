import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Header = styled.header`
  h1 {
    margin: ${props => props.theme.spacing['10']} 0;
    font-size: ${props => props.theme.fontSize['4xl']};

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: ${props => props.theme.fontSize['5xl']};
    }
  }
`;

const Body = styled.div`
  section {
    /* we have to fight off the gutter created by the padding on main since we
    want to have the background color extend 100vw */
    margin: 0 -${props => props.theme.pageGutter};
    padding: ${props => props.theme.spacing['10']} ${props => props.theme.pageGutter};

    @media (min-width: ${props => props.theme.screen.md}) {
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
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    grid-row-gap: ${props => props.theme.spacing['5']};
    grid-column-gap: ${props => props.theme.spacing['12']};
    align-items: start;
  }

  .grid-item {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// gatsby-node api will pass in slug from context data as graphql variable.
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const CaseStudyTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <Header>
        <h1>{project.frontmatter.title}</h1>
      </Header>
      <Body>
        <MDXRenderer>{project.body}</MDXRenderer>
      </Body>
    </Layout>
  );
};

export default CaseStudyTemplate;
