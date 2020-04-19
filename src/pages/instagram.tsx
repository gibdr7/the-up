import '../components/InstaGallery/insta_style.scss';

import { FaInstagram } from 'react-icons/fa';
import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/InstaGallery/gallery';
import Layout from '../components/layout';
import { AllMarkdownProps } from '../@types/context';

export default ({ data }: AllMarkdownProps) => (
  <Layout title="Instagram">
    <div className="insta-info">
      <a href={data.site.siteMetadata.instagram}>
        <FaInstagram size="28px" />
        <span className="vertical-align">Check out my Instagram</span>
      </a>
    </div>
    <Gallery posts={data.instas} />
  </Layout>
);

export const query = graphql`
  query instagram {
    site {
      siteMetadata {
        instagram
      }
    }
    instas: allInstaNode {
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
`;
