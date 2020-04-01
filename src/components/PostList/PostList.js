import React from "react"
import "./post-list.scss"
import PostCard from "../PostCard/postCard"
import { Link } from "gatsby"
import { titleSlug } from "../../helpers/methods"

const PostList = ({ posts, pageContext }) => {
  return (
    <>
      {posts.map(({ node }) => {

        return (
          <PostCard post={node} excerpt inCat/>
        )
      })}

      <ul>
        {Array.from({ length: pageContext.numPages }).map((_, i) => {
          const index = i + 1
          const link = index === 1 ? "/" : `/${titleSlug(pageContext.category)}/${index}`

          return (
            <li key={index}>
              {pageContext.currentPage === index ? (
                <span>{index}</span>
              ) : (
                <Link to={link}>{index}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PostList
