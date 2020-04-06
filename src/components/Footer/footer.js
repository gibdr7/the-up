import './style.scss'

import React from 'react'
import SocialContainer from '../SocialContainer/socialContainer'

const Footer = () => (
  <footer className="footer center has-background-light">
    <div className="content has-text-centered">
      <p className="is-size-4">By Drew Gibson</p>
      <article className="media center">
        <SocialContainer />
      </article>
      &nbsp;
      <p className="is-size-5">
        Show me some love by{' '}
        <a href="https://paypal.me/gibdr7">Buying Me a Coffee</a>
      </p>
    </div>
  </footer>
)

export default Footer
