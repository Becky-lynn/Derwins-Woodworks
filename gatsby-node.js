const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
  query MyQuery {
    allContentfulProduct {
      nodes {
        id
        name
        cost
        quantity
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
    `)

  const productTemplate = path.resolve(`src/templates/product-page.js`)
  queryResults.data.allContentfulProduct.nodes.forEach(node => {
    createPage({
      path: `/product/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
}