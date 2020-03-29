import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import SocialContainer from '../SocialContainer/socialContainer'

const AboutComponent = () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        site {
          siteMetadata {
            title
            author
            description
            email
            phone
          }
        }
      }
    `}
    render={data => (
      <section className="section-container">
        <h1 className="title is-4">About Us</h1>
        <section>
          <h3>Description</h3>
          <p>{data.site.siteMetadata.description}</p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>{data.site.siteMetadata.phone}</p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href={'mailto:' + data.site.siteMetadata.email}>
              {data.site.siteMetadata.email}
            </a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <article className="media center">
            <SocialContainer />
          </article>
        </section>
      </section>
    )}
  />
)

export default AboutComponent
