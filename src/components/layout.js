import React from 'react'

import Helmet from './Helmet/helmet'
import Footer from './Footer/footer'
import Navbar from './Nav/navbar'

const Layout = ({ children }) => (
  <div>
    <Helmet />
	<Navbar />
	{children}
    <Footer />
  </div>
)

export default Layout
