import './insta_style.scss'

import { FaHeart } from 'react-icons/fa'
import Image from 'gatsby-image'
import Moment from 'moment'
import React from 'react'

export default ({ posts }) => {
  const numPosts = posts.edges.length
  const numRows = Math.ceil(numPosts / 3)
  posts.edges.sort((a, b) => (a.node.timestamp > b.node.timestamp ? -1 : 1))

  const nColumnPosts = num => {
    let columnPosts = []
    for (var i = 0; i < numRows; i++) {
      if (num + 3 * i > numPosts - 1) {
        continue
      }

      const post = posts.edges[num + 3 * i].node

      if (post) {
        const captionText = post.caption ? post.caption : 'Instagram Post'
        const formattedDate = Moment(post.timestamp * 1000).format('M.D.YY')
        columnPosts.push(
          <div key={captionText} className="tile is-child">
            <a href={'https://www.instagram.com/p/' + post.id}>
              <div className="overlay">
                <div className="content">
                  <div className="title">{captionText}</div>
                  <div className="bottom">
                    <span>
                      <FaHeart /> {post.likes}
                    </span>
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </div>
              <Image
                className="postImage"
                fluid={post.localFile.childImageSharp.fluid}
                caption={captionText}
              />
            </a>
          </div>,
        )
      }

      if (columnPosts.length < numRows) {
        columnPosts.push(
          <div className="tile is-child">
            <div></div>
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
