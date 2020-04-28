/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const _ = require('lodash');

const titleSlug = str =>
  str
    .toLowerCase()
    .replace(/[^\w\d\s]+/g, '')
    .replace(/\s+/g, '-');

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            excerpt
            fields {
              collection
              pagePath
              readingTime {
                text
                minutes
                time
                words
              }
            }
            frontmatter {
              title
              category
              date(formatString: "MMMM DD, YYYY")
              subcategory
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
      subcategoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___subcategory) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const postTemplate = path.resolve(`src/templates/postTemplate.tsx`);
  const allEdges = result.data.postsRemark.edges;
  const catSubcatMapping = {};

  const postEdges = allEdges.filter(
    edge => edge.node.fields.collection === `posts`,
  );

  postEdges.forEach((post, index) => {
    const prev =
      index === postEdges.length - 1 ? null : postEdges[index + 1].node;
    const next = index === 0 ? null : postEdges[index - 1].node;
    const catSubcat = {
      key: post.node.frontmatter.category,
      val: post.node.frontmatter.subcategory,
    };
    if (!catSubcatMapping[catSubcat.key]) {
      catSubcatMapping[catSubcat.key] = [];
    }
    catSubcatMapping[catSubcat.key].push(catSubcat.val);

    createPage({
      path: post.node.fields.pagePath,
      component: postTemplate,
      context: {
        pagePath: post.node.fields.pagePath,
        prev,
        next,
      },
    });
  });

  const ccEdges = allEdges.filter(
    edge => edge.node.fields.collection === `credit_cards`,
  );

  ccEdges.forEach((creditCard, index) => {
    const prev = index === ccEdges.length - 1 ? null : ccEdges[index + 1].node;
    const next = index === 0 ? null : ccEdges[index - 1].node;

    createPage({
      path: creditCard.node.fields.pagePath,
      component: postTemplate,
      context: {
        pagePath: creditCard.node.fields.pagePath,
        prev,
        next,
      },
    });
  });

  const blogCategoryTemplate = path.resolve(
    `./src/templates/blogCategoryTemplate.tsx`,
  );
  const categories = result.data.categoriesGroup.group;
  const postsPerPage = 9;
  const numCategories = categories.length;

  for (var cat in catSubcatMapping) {
    const link = `/${titleSlug(cat)}`;

    Array.from({
      length: numCategories,
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          allCategories: categories,
          category: cat,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(categories.totalCount / postsPerPage),
        },
      });
    });
  }

  const blogSubcategoryTemplate = path.resolve(
    `./src/templates/blogSubcategoryTemplate.tsx`,
  );
  const subcategories = result.data.subcategoriesGroup.group;
  const numSubcategories = subcategories.length;

  for (var cat in catSubcatMapping) {
    const subcats = catSubcatMapping[cat];
    subcats.forEach((subcat, i) => {
      const link = `/${titleSlug(cat)}/${titleSlug(subcat)}`;

      Array.from({
        length: Math.ceil(numSubcategories / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/${i + 1}`,
          component: blogSubcategoryTemplate,
          context: {
            allSubcategories: catSubcatMapping[cat],
            subcategory: subcat,
            category: cat,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(subcategories.totalCount / postsPerPage),
          },
        });
      });
    });
  }

  // const blogListTemplate = path.resolve(`./src/templates/blogListTemplate.tsx`);
  // const postsWithoutFeatured = posts.filter(
  //   ({ node }) => !node.frontmatter.featured,
  // );
  // const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage);
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
  //     component: blogListTemplate,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       currentPage: i + 1,
  //       numPages,
  //     },
  //   });
  // });

  const tagTemplate = path.resolve('src/templates/tagTemplate.tsx');
  const tags = result.data.tagsGroup.group;

  tags.forEach(tag => {
    createPage({
      path: `/tags/${titleSlug(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, 'parent'));

    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName'),
    });
    if (node.fields.collection === `posts`) {
      const pagePath = `/${[
        node.frontmatter.category,
        node.frontmatter.subcategory,
        node.frontmatter.title,
      ]
        .map(el => titleSlug(el))
        .join('/')}`;
      createNodeField({
        node,
        name: `pagePath`,
        value: pagePath,
      });
      const catSubcategory = [
        node.frontmatter.category,
        node.frontmatter.subcategory,
      ];
      createNodeField({
        node,
        name: `catSubcategory`,
        value: catSubcategory,
      });
    }
    if (node.fields.collection === `credit_cards`) {
      const pagePath = `/credit-cards/${[
        node.frontmatter.bank,
        node.frontmatter.name,
      ]
        .map(el => titleSlug(el))
        .join('-')}`;
      createNodeField({
        node,
        name: `pagePath`,
        value: pagePath,
      });
    }
  }
};
