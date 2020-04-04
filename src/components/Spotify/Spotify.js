import React from 'react'

import Image from 'gatsby-image'
import "./spotify.scss"

const Spotify = ({ playlists }) => (
  <section>
    <article className="playlistItems">
      {playlists.map(({ node: { name, href, image, tracks, spotifyId } }) => (
        <a href={href.replace('api.spotify.com/v1/playlists','open.spotify.com/playlist')}>
        <div className='playlistItemContainer' key={name}>
          <h2 className='title is-3'>{name}</h2>
          <div className='playlistItem'>
            <Image
              fluid={image.localFile.childImageSharp.fluid}
              key={spotifyId}
              caption={name}
            />
            <iframe
              allowTransparency="true"
              className='spotifyEmbed'
              frameBorder="0"
              src={href.replace('api.spotify.com/v1/playlists','open.spotify.com/embed/playlist')}
              title={name}
            />
          </div>
        </div>
        </a>
      ))}
    </article>
  </section>
)

export default Spotify
