import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          url
          description
          github
          twitter
          twitterHandle
          instagram
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
