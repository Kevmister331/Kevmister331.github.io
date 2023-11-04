const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blogPostTemplate.js`),
      context: {
        id: node.id,
      },
    })
  })
}
