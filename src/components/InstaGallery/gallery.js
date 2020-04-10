import '../../pages/insta_style.scss'

import Image from 'gatsby-image'
import React from 'react'

export default ({ posts }) => {
  const numPosts = posts.edges.length
  const numRows = Math.ceil(numPosts / 3)

  const nColumnPosts = num => {
    let columnPosts = []
    for (var i = 0; i < numRows; i++) {
      if (num + 3 * i > numPosts - 1) {
        continue
      }

      const post = posts.edges[num + 3 * i].node

      if (post) {
        let captionText = post.caption ? post.caption.text : 'Instagram Post'
        columnPosts.push(
          <div key={captionText} className="tile is-child">
            <Image
              fluid={post.localFile.childImageSharp.fluid}
              caption={captionText}
            />
          </div>,
        )
      }
    }
    return columnPosts
  }

  return (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">{nColumnPosts(0)}</div>
      <div className="tile is-4 is-vertical is-parent">{nColumnPosts(1)}</div>
      <div className="tile is-4 is-vertical is-parent">{nColumnPosts(2)}</div>
    </div>
  )
}
