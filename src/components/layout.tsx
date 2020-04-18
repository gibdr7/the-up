import React from 'react';
import cx from 'classnames';
import Footer from './Footer/footer';
import Navbar from './Nav/navbar';
import SEO from './seo';

const Layout = ({ title, children }) => (
  <div className={cx('sticky-footer', title)}>
    <SEO title={title} />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
