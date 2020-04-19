import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            url
            coverImage {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => {
    const {
      frontmatter: { title, slug, url, coverImage },
      excerpt,
    } = project;

    return { title, slug, url, excerpt, coverImage };
  });
};

export default useProjects;
