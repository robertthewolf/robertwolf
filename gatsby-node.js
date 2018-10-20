const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const pages = await graphql(`
    {
      allPrismicCategory {
        edges {
          node {
            id
            slugs
          }
        }
      }
      allPrismicPost {
        edges {
          node {
            id
            slugs
            data {
              category {
                slug
              }
            }
          }
        }
      }
    }
  `)

  //create categories
  pages.data.allPrismicCategory.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slugs[0]}/`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        id: edge.node.id,
      }
    })
  })

  //create posts
  pages.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.data.category.slug}/${edge.node.slugs[0]}/`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: edge.node.id,
      }
    })
  })
}