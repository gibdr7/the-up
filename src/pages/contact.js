import React from 'react'
import Layout from '../components/layout'
import ContactComponent from '../components/contact'


const Contact = () => (
  <Layout title="Contact">
    <div style={{ minHeight: "600px" }}>
      <ContactComponent />
    </div>
  </Layout>
)

export default Contact