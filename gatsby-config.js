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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              disableBgImageOnAlpha: true,
              withWebp: true,
              maxWidth: 550,
              linkImagesToOriginal: false,
              quality: 85,
              wrapperStyle: `
                width: 100%;
              `,
            },
          },
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'none',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: 'src',
      },
    },
  ],
};
