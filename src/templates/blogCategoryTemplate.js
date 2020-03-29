import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PostCard from '../components/PostCard/postCard'
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
              return <PostCard post={node} excerpt inCat/>
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
          excerpt
          fields {
            pagePath
            readingTime {
              text
            }
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
