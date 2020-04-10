import './insta_style.scss'

import { FaInstagram } from 'react-icons/fa'
import Gallery from '../components/InstaGallery/gallery'
import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout title="Instagram">
      <div className="insta-info">
        <a href={data.site.siteMetadata.instagram}>
          <FaInstagram size="28px" />
          <span className="vertical-align">Check out my Instagram</span>
        </a>
      </div>
      <Gallery posts={data.allInstaNode} />
    </Layout>
  )
}

export const query = graphql`
  query instagram {
    site {
      siteMetadata {
        instagram
      }
    }
    allInstaNode {
      edges {
        node {
          id
          likes
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
