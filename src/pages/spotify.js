import '../components/Spotify/spotify.scss'

import { FaSpotify } from 'react-icons/fa'
import Layout from '../components/layout'
import React from 'react'
import Spotify from '../components/Spotify/Spotify'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const playlists_to_keep = [
    'Hunter🔥',
    'Full Circle 💫',
    'All that Power',
    '🦁 carpe vitam 🚀',
    'Indialtfolk',
    'chill state',
  ]
  const beginning_of_words = playlists_to_keep.map(playlist =>
    playlist.substring(0, 8),
  )
  const playlists = data.playlists.edges.filter(
    playlist =>
      beginning_of_words.indexOf(playlist.node.name.substring(0, 8)) >= 0,
  )
  return (
    <Layout title="🔊 Spotify">
      <div>
        <div className="spotify-info title is-3">
          <a href={data.site.siteMetadata.spotify}>
            <FaSpotify size="48px" />
            <span className="check-it-out">Check out my Spotify</span>
          </a>
        </div>
        <Spotify playlists={playlists} />
      </div>
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
