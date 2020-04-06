import './style.scss'

import { StaticQuery, graphql } from 'gatsby'

import React from 'react'

const ContactComponent = () => (
  <StaticQuery
    query={graphql`
      query contactQuery {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <section>
        <h1 className="title is-4">Get in touch!</h1>
        <form method="post" action="#">
          <div className="field">
            <label>
              Name
              <input
                type="text"
                name="name"
                id="name"
                className="inputs is-size-5"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="inputs is-size-5"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Subject
              <input
                type="text"
                name="subject"
                id="subject"
                className="inputs is-size-5"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Message
              <textarea
                name="message inputs"
                id="message"
                rows="5"
                className="inputs"
              />
            </label>
          </div>
          <div className="field">
            <a href={'mailto:' + data.site.siteMetadata.email}>
              <button type="submit" className="button is-light is-normal">
                Send
              </button>
            </a>
            <input
              type="reset"
              value="Clear"
              className="button is-light is-normal"
            />
          </div>
        </form>
      </section>
    )}
  />
)

export default ContactComponent
