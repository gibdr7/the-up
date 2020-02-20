import React from 'react'

import Helmet from './Helmet/helmet'
import Footer from './Footer/footer'
import Navbar from './Nav/navbar'

const Layout = ({ children }) => (
  <div className="sticky-footer">
    <Helmet />
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
