/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = async ({actions, graphql, reporte})

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      {
        allProjectsJson {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
    if (result.error) {
      reporter.panic("there was a problem loading your")
      return
    }
  
    const projects = result.data.allProjectsJson.edges
  
    projects.forEach(({ node: { title } }) => {
      actions.createPage({
        path: `/projects/${title}/`,
        component: require.resolve("./src/templates/project.js"),
        context: { title },
      })
    })
  }
  