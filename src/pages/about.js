import '../components/About/style.scss'

import AboutComponent from '../components/About/about'
import ContactComponent from '../components/Contact/contact'
import Layout from '../components/layout'
import React from 'react'

const About = () => (
  <Layout title="About">
    <div className="columns">
      <ContactComponent />
      <AboutComponent />
    </div>
  </Layout>
)

export default About
