import React from 'react'
import Layout from '../components/layout'
import { FaSpotify } from 'react-icons/fa'
import Spotify from '../components/Spotify/Spotify'

export default ({ data }) => {
    console.log(data.playlists)
  return (
    <Layout title="🔊 Spotify">
      <div className="insta-info">
        <a href={data.site.siteMetadata.spotify}>
          <FaSpotify size="28px" />
          <span className="vertical-align">Check out my Instagram</span>
        </a>
      </div>
      <Spotify playlists={data.playlists} />
    </Layout>
  )
}


export const query = graphql`
  query SpotifyPlaylists {
    site {
      siteMetadata {
        spotify
      }
    }
    playlists: allSpotifyPlaylist {
      edges {
        node {
          spotifyId
          name
          href
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          images {
            url
            height
            width
          }
          tracks {
            href
            total
          }
          owner {
            display_name
          }
        }
      }
    }
  }
`
