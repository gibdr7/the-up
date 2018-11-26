import React from 'react'

import '../components/main-style.scss'
import Midsection from '../components/Midsection/midsection'
import Layout from '../components/layout'
import Header from '../components/Header/header'

const IndexPage = () => (
  <Layout>
    <Header />
    <Midsection />
  </Layout>
)

export default IndexPage
