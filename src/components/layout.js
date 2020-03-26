import React from 'react'

import SEO from './seo'
import Footer from './Footer/footer'
import Navbar from './Nav/navbar'

const Layout = ({ title, children }) => (
  <div className="sticky-footer">
    <SEO title={title}/>
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
