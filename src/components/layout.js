import Footer from './Footer/footer'
import Navbar from './Nav/navbar'
import React from 'react'
import SEO from './seo'
import cx from 'classnames'

const Layout = ({ title, children }) => (
  <div className={cx('sticky-footer', title)}>
    <SEO title={title} />
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
