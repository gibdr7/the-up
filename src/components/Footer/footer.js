import React from "react";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "../emoji";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
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
            This website was handcrafted with plenty cups of{" "}
            <Emoji emoji="☕" />
          </p>
          <p className="is-size-4">
            By Drew Gibson using{" "}
            <a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{" "}
            <a href={data.site.siteMetadata.bulma}>Bulma</a>
          </p>
          <article className="media center">
            <span className="icon">
              <a href="/instagram">
                <FaInstagram size="28px" />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a href={data.site.siteMetadata.github}>
                <FaGithub size="28px" />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a href={data.site.siteMetadata.facebook}>
                <FaFacebook size="28px" />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a href={data.site.siteMetadata.linkedin}>
                <FaLinkedin size="28px" />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className="is-size-5">
            Show me some love by{" "}
            <a href="https://paypal.me/gibdr7">Buying Me a Coffee</a>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
