import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          github
          twitter
          instagram
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
