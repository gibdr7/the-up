import React from 'react'
import { graphql } from 'gatsby'

import './postTemplate.scss'
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SocialContainer from '../components/SocialContainer/socialContainer'

export default function Template({
  pageContext,
  data,
}) {
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
          <div className="columns subtitle is-5 is-spaced">
            <h3 className="column has-text-right">{frontmatter.date}</h3>
            <h3 className="column">{fields.readingTime.text} </h3>
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
              <a href="/tags" className="tag is-primary is-light">
                See all tags
              </a>
            </div>
          </div>
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
