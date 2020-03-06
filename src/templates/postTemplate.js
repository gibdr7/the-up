import React from 'react'
import { graphql } from 'gatsby'

import './postTemplate.scss'
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";


export default function Template({
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="breadcrumb-container">
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
          />
        </div>
        <div className="blog-post">
          <h1 className="title is-1 has-text-centered is-uppercase">{frontmatter.title}</h1>
          <div className="columns subtitle is-5 is-spaced">
            <h3 className="column has-text-right">{frontmatter.date}</h3>
            <h3 className="column">{fields.readingTime.text}{' '}</h3>
          </div>
          <div className="social-container">
            <article className="media center">
              <span className="icon pads">
                <a href={data.site}>
                  <FaInstagram size="40px"/>
                </a>
              </span>
              &nbsp;
              <span className="icon pads">
                <a href={data.site}>
                  <FaGithub size="40px"/>
                </a>
              </span>
              &nbsp;
              <span className="icon pads">
                <a href={data.site}>
                  <FaFacebook size="40px"/>
                </a>
              </span>
              &nbsp;
            </article>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="tagging field is-grouped">
          {frontmatter.tags.map((tag) => 
            <div className="control" key={tag}>
              <div className="tags has-addons">
                <a href={"/tags/"+tag.replace(" ","-")} className="tag is-primary">{tag}</a>
              </div>
            </div>
          )}
            <div>
              <div>
                <a href="/tags" className="tag is-primary is-light">See all tags</a>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
