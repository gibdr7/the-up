import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaSpotify } from 'react-icons/fa'
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
          <Link to={`/instagram`}>
            <FaInstagram size="28px" />
          </Link>
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
        <span className="icon">
          <Link to='/spotify'>
            <FaSpotify size="28px"/>
          </Link>
        </span>
      </section>
    )}
  />
)

export default SocialContainer