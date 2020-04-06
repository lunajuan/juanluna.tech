/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Juan Luna Ramirez',
    description: `Juan is a JavaScript developer based in Los Angeles, California. Come check out what he's been working on lately.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
  ],
};
