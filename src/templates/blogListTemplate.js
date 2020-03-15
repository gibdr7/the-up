import React from "react"
import { graphql, Link } from "gatsby"

const blogListTemplate = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data

  return (
    <>
      {allMarkdownRemark.edges.map(({ node }) => {

        return (
          <>
            <Link to={node.fields.pagePath} key={node.frontmatter.title}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>In: {node.frontmatter.category.join()}</p>
          </>
        )
      })}

      <ul>
        {Array.from({ length: pageContext.numPages }).map((_, i) => {
          const index = i + 1
          const link = index === 1 ? "/blog" : `/blog/page/${index}`

          return (
            <li key={index}>
              {pageContext.currentPage === index ? (
                <span>{index}</span>
              ) : (
                <a href={link}>{index}</a>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default blogListTemplate

export const query = graphql`
  query blogListTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
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