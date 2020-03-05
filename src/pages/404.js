import React from 'react'
import Layout from '../components/layout'
import '../components/main-style.scss'

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-box">
      <h1 className="has-text-centered is-title is-size-1 is-uppercase">Page not found</h1>
      <p className="has-text-centered is-size-3">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
