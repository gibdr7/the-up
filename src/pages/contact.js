import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactComponent from '../components/contact'


const Contact = () => (
  <Layout>
    <SEO lang="en" title="Contact" />
    <div style={{ minHeight: "600px" }}>
      <ContactComponent />
    </div>
  </Layout>
)

export default Contact