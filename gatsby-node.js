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
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      subcategoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___subcategory) {
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

  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const posts = result.data.postsRemark.edges
  const subcategories = []

  posts.forEach(post => {
    subcategories.push(post.node.frontmatter.subcategory)

    createPage({
      path: post.node.fields.pagePath,
      component: blogPostTemplate,
      context: {
        pagePath: post.node.fields.pagePath,
      },
    })
  })

  const blogCategoryTemplate = path.resolve(
    `./src/templates/blogCategoryTemplate.js`,
  )
  const categories = result.data.categoriesGroup.group
  const postsPerPage = 9
  const numCategories = categories.length

  categories.forEach(cat => {
    const link = `/${_.kebabCase(titleSlug(cat.fieldValue))}`

    Array.from({
      length: numCategories,
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          allCategories: categories,
          category: cat.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(numCategories / postsPerPage),
        },
      })
    })
  })

  const countSubcategories = subcategories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const allSubcategories = Object.keys(countSubcategories)

  allSubcategories.forEach((subcat, i) => {
    const link = `/${_.kebabCase(subcat)}`

    Array.from({
      length: Math.ceil(countSubcategories[subcat] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          allSubcategories: allSubcategories,
          subcategory: subcat,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countSubcategories[subcat] / postsPerPage),
        },
      })
    })
  })

  const blogListTemplate = path.resolve(`./src/templates/blogListTemplate.js`)
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

  const tagTemplate = path.resolve('src/templates/tagTemplate.js')
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
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
