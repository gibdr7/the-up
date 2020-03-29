import React from 'react'
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from '../emoji'
import SocialContainer from '../SocialContainer/socialContainer'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            instagram
            facebook
            github
            linkedin
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          <p className="is-size-4">
            This website was handcrafted with plenty cups of{' '}
            <Emoji emoji="☕" />
          </p>
          <p className="is-size-4">
            By Drew Gibson
          </p>
          <article className="media center">
            <SocialContainer/>
          </article>
          &nbsp;
          <p className="is-size-5">
            Show me some love by{' '}
            <a href="https://paypal.me/gibdr7">Buying Me a Coffee</a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
