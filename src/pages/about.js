import React from 'react'
import Layout from '../components/layout'
import ContactComponent from '../components/Contact/contact'
import AboutComponent from '../components/About/about'
import '../components/About/style.scss'

const About = () => (
  <Layout title="About">
    <div className="columns">
        <ContactComponent />
        <AboutComponent />
      </div>
  </Layout>
)

export default About
