import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'

const About = () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        site {
          siteMetadata {
            description
            author
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO lang="en" title="About" />
        <div style={{ minHeight: '600px' }}>
          <div>{data.site.siteMetadata.title}</div>
          <div>by {data.site.siteMetadata.author}</div>
          <div>{data.site.siteMetadata.description}</div>
        </div>
      </Layout>
    )}
  />
)

export default About
