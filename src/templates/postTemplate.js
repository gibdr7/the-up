import './postTemplate.scss'

import { Link, graphql } from 'gatsby'

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from '../components/layout'
import React from 'react'
import SocialContainer from '../components/SocialContainer/socialContainer'

export default function Template({ pageContext, data }) {
  const post = data.markdownRemark
  const { frontmatter, html, fields } = post
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title={frontmatter.title}>
      <div className="blog-post-container">
        <div className="breadcrumb-container">
          <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
        </div>
        <div className="blog-post">
          <h1 className="title is-2 has-text-centered is-uppercase">
            {frontmatter.title}
          </h1>
          <div className="subtitle is-5 is-spaced has-text-centered">
            {frontmatter.date} -- {fields.readingTime.text}
          </div>
          <div className="social-container">
            <article className="media center">
              <SocialContainer />
            </article>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="tagging field is-grouped">
          {frontmatter.tags.map(tag => (
            <div className="control" key={tag}>
              <div className="tags has-addons">
                <a
                  href={'/tags/' + tag.replace(' ', '-')}
                  className="tag is-primary"
                >
                  {tag}
                </a>
              </div>
            </div>
          ))}
          <div>
            <div>
              <Link to="/tags" className="tag is-primary is-light">
                See all tags
              </Link>
            </div>
          </div>
        </div>
        <div className="prevNextNav">
          {pageContext.prev ? (
            <Link
              to={pageContext.prev.fields.pagePath}
              className="prevNav has-text-weight-semibold"
            >
              {'<'} {pageContext.prev.frontmatter.title}
            </Link>
          ) : (
            <div className="prevNav"></div>
          )}
          {pageContext.next ? (
            <Link
              to={pageContext.next.fields.pagePath}
              className="nextNav has-text-weight-semibold"
            >
              {pageContext.next.frontmatter.title} {'>'}
            </Link>
          ) : (
            <div className="nextNav"></div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query postQuery($pagePath: String!) {
    markdownRemark(fields: { pagePath: { eq: $pagePath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      fields {
        readingTime {
          text
          minutes
          time
          words
        }
      }
    }
  }
`
