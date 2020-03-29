import React from "react";
import { shape, string, object } from 'prop-types';

import { PageHelmet } from "../components/helmet/";

import styles from "./Spotify.module.css";

const Spotify = ({ data: { allContentfulSpotifyPlaylist: playlists } }) => (
  <section>
    <PageHelmet title='🔊 Spotify' />
    <header>
      <h1>Spotify</h1>
    </header>
    <article className={styles.playlistItems}>
        {/* playlist.map(({ node: { playlistTitle, playlistImageLocal, playlistUrl, playlistDescription } }) => ( */}
        {/* playlist.map(({ node: { playlistTitle, playlistImageLocal, playlistUrl, playlistDescription } }) => ( */}
          {/* <div className={styles.playlistItemContainer} key={playlistTitle}>
            <h2>{playlistTitle}</h2>
            {playlistDescription && <p className={styles.playlistDescription}>{playlistDescription}</p>}
            <div className={styles.playlistItem}>
              <img alt='Spotify Cover' className={styles.playlistImage} src={playlistImageLocal.file.url} />
              <iframe
                allowTransparency='true'
                className={styles.spotifyEmbed}
                frameBorder='0'
                src={playlistUrl}
                title={playlistTitle}
              />
            </div>
          </div>
        ))
      } */}
      test
    </article>
  </section>
);

export default Spotify;
