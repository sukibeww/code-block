const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
        edges {
          node {
            fields {
              slug
            }
          }
        }
        totalCount
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 1;
  const numPages = posts.length

  result.data.allMarkdownRemark.edges.forEach(({ node }, i) => {
    createPage({
      path: `/blog/${Number(result.data.allMarkdownRemark.totalCount) - i}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: result.data.allMarkdownRemark.totalCount - i,
      },
    })
  })
}