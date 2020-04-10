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
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => {
    const {
      frontmatter: { title, slug, url },
      excerpt,
    } = project;

    return { title, slug, url, excerpt };
  });
};

export default useProjects;
