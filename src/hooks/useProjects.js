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
            coverImage {
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => {
    const {
      id,
      frontmatter: { title, description, slug, url, github, codesandbox, coverImage },
    } = project;

    return { id, title, description, slug, url, github, codesandbox, coverImage };
  });
};

export default useProjects;
