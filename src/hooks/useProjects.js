import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___order], order: [ASC] }) {
        nodes {
          id
          frontmatter {
            title
            description
            slug
            url
            github
            codesandbox
            imageFileName {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 85) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageAlt
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => {
    const {
      id,
      frontmatter: { title, description, slug, url, github, codesandbox, imageFileName, imageAlt },
    } = project;

    return { id, title, description, slug, url, github, codesandbox, imageFileName, imageAlt };
  });
};

export default useProjects;
