import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

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

const ProjectTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <h1>{project.frontmatter.title}</h1>
      <MDXRenderer>{project.body}</MDXRenderer>
    </Layout>
  );
};

export default ProjectTemplate;
