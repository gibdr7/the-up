const path = require('path')
const _ = require('lodash')
const titleSlug = str =>
  str
    .toLowerCase()
    .replace(/[^\w\d\s]+/g, '')
    .replace(/\s+/g, '-')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const tagTemplate = path.resolve('src/templates/tagTemplate.js')

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              pagePath
            }
            frontmatter {
              title
              category
              subcategory
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      // path: node.frontmatter.path,  // TODO: if path provided, use that, otherwise format like below
      path: `/${[
        node.frontmatter.category,
        node.frontmatter.subcategory,
        node.frontmatter.title,
      ]
        .map(el => titleSlug(el))
        .join('/')}`,
      component: blogPostTemplate,
      context: {
        tags: node.frontmatter.tags,
        pagePath: `/${[
          node.frontmatter.category,
          node.frontmatter.subcategory,
          node.frontmatter.title,
        ]
          .map(el => titleSlug(el))
          .join('/')}`,
      },
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  const blogListTemplate = path.resolve(`./src/templates/blogListTemplate.js`)
  const postsPerPage = 9
  const postsWithoutFeatured = posts.filter(({ node }) => {
    return !node.frontmatter.featured
  })
  const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  const blogCategoryTemplate = path.resolve(
    `./src/templates/blogCategoryTemplate.js`,
  )
  const categories = []

  posts.forEach((post, index) => {
    categories.push(post.node.frontmatter.category)

    createPage({
      path: post.node.fields.pagePath,
      component: blogPostTemplate,
      context: {
        pagePath: post.node.fields.pagePath,
      },
    })
  })
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const allCategories = Object.keys(countCategories)

  allCategories.forEach((cat, i) => {
    const link = `/${_.kebabCase(cat)}`

    Array.from({
      length: Math.ceil(countCategories[cat] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          allCategories: allCategories,
          category: cat,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[cat] / postsPerPage),
        },
      })
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    const pagePath = `/${[
      node.frontmatter.category,
      node.frontmatter.subcategory,
      node.frontmatter.title,
    ]
      .map(el => titleSlug(el))
      .join('/')}`
    createNodeField({
      node,
      name: `pagePath`,
      value: pagePath,
    })
  }
}
