exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create projects', result.errors);
  }

  const projects = result.data.allMdx.nodes;

  // create pages from our mdx files (just projects for now) that have a slug in
  // their frontmatter. Only supply slug as part of page context so we can then
  // query for actualy page data in the template.
  projects.forEach(project => {
    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve('./src/templates/case-study.js'),
      context: {
        slug: project.frontmatter.slug,
      },
    });
  });
};
