import './style.scss'

import React from 'react'

const Header = ({ siteTitle }) => (
  <section className="hero colorGradient is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="title is-uppercase is-size-1 has-text-white">
                The Up
              </h1>
              <p className="subtitle has-text-white is-size-3">
                Welcome to Your Resource For life
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div className="hero-footer"></div>
  </section>
)

export default Header
