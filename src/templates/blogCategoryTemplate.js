import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import './categoryPage.scss'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const blogCategoryTemplate = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const {
    breadcrumb: { crumbs },
  } = pageContext
  
  const titleSlug = str =>
  str
    .toLowerCase()
    .replace(/[^\w\d\s]+/g, '')
    .replace(/\s+/g, '-')

  return (
    <Layout title={pageContext.category}>
      <div>
        <div className="category-page-container">
          <div className="breadcrumb-container">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
          </div>
          <div className="tile is-ancestor">
            {allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div className="tile is-4 is-vertical is-parent">
                  <Link href={node.fields.pagePath}>
                    <div className="tile is-child box">
                      <Link to={node.fields.pagePath}>
                        <h1>{node.frontmatter.title}</h1>
                      </Link>
                      <p>{node.frontmatter.date}</p>
                      <p>
                        In:{' '}
                        <Link to={`/${kebabCase(node.frontmatter.category)}`}>
                          {node.frontmatter.category}
                        </Link>
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="category-container has-text-centered">
            {' '}
            <h1>Categories:</h1>
             {pageContext.allCategories.map(cat => (
               <Link to={`/${kebabCase(cat.fieldValue)}`}>{cat.fieldValue}</Link>
             ))}
          </div>
        </div>
        <div className="pageNumbers has-text-centered">
          <ul className="numbers has-text-centered">
            {Array.from({ length: pageContext.numPages }).map((item, i) => {
              const index = i + 1
              const category = titleSlug(pageContext.category)
              const link =
                index === 1 ? `/${category}` : `/${category}/page/${index}`

              return (
                <li key={index}>
                  {pageContext.currentPage === index ? (
                    <span>{index}</span>
                  ) : (
                    <Link className="pageNumberLink" href={link}>
                      {index}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default blogCategoryTemplate

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            pagePath
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`
