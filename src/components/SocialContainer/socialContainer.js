import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import "./style.scss"

const SocialContainer = () => (
  <StaticQuery
    query={graphql`
      query socialQuery {
        site {
          siteMetadata {
            instagram
            facebook
            linkedin
            github
          }
        }
      }
    `}
    render={data => (
      <section>
        <span className="icon">
          <a href="/instagram">
            <FaInstagram size="28px" />
          </a>
        </span>
        <span className="icon">
          <a href={data.site.siteMetadata.github}>
            <FaGithub size="28px" />
          </a>
        </span>
        <span className="icon">
          <a href={data.site.siteMetadata.facebook}>
            <FaFacebook size="28px" />
          </a>
        </span>
        <span className="icon">
          <a href={data.site.siteMetadata.linkedin}>
            <FaLinkedin size="28px" />
          </a>
        </span>
      </section>
    )}
  />
)

export default SocialContainer