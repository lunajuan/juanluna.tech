import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___order], order: [ASC] }) {
        nodes {
          id
          frontmatter {
            header
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
            tech
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => {
    const {
      id,
      frontmatter: {
        header,
        description,
        slug,
        url,
        github,
        codesandbox,
        imageFileName,
        imageAlt,
        tech,
      },
    } = project;

    return {
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
    };
  });
};

export default useProjects;
