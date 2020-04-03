import React from 'react'

import Image from 'gatsby-image'
import "./spotify.scss"

const Spotify = ({ playlists }) => (
  <section>
    <header>
      <h1>Spotify</h1>
    </header>
    <article className="playlistItems">
      {playlists.edges.map(({ node: { name, href, image, tracks, spotifyId } }) => (
        <div className='playlistItemContainer' key={name}>
          <h2>{name}</h2>
          {/* {playlistDescription && (
            <p className={styles.playlistDescription}>{playlistDescription}</p>
          )} */}
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
      ))}
    </article>
  </section>
)

export default Spotify
