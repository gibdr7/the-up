import './post-list.scss';

import { Link } from 'gatsby';
import React from 'react';
import PostCard from '../PostCard/postCard';
import { titleSlug } from '../../utils/formatter';
import { Node, ArchivePageContext } from '../../@types/context'

interface Posts {
  node: Node;
}

interface Props {
  posts: Posts[];
  pageContext: ArchivePageContext;
}

const PostList = ({ posts, pageContext }: Props) => (
  <>
    {posts.map(({ node }) => (
      <PostCard key={node.frontmatter.title} post={node} excerpt inCat />
    ))}

    <ul>
      {Array.from({ length: pageContext.numPages }).map((_, i) => {
        const index = i + 1;
        const link =
          index === 1 ? '/' : `/${titleSlug(pageContext.category)}/${index}`;

        return (
          <li key={index}>
            {pageContext.currentPage === index ? (
              <span>{index}</span>
            ) : (
                <Link to={link}>{index}</Link>
              )}
          </li>
        );
      })}
    </ul>
  </>
);

export default PostList;
