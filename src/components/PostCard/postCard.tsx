import '../InstaGallery/insta_style.scss';

import { Link } from 'gatsby';
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Node } from '../../@types/context';

interface Props {
  post: Node;
  excerpt?: boolean;
  inCat?: boolean;
  inSubcat?: boolean;
}

const PostCard = ({ post, excerpt, inCat, inSubcat }: Props) => (
  <div className="tile is-4 is-vertical is-parent">
    <Link to={post.fields.pagePath}>
      <div className="tile is-child box">
        <Link to={post.fields.pagePath}>
          <h1 className="title is-4">{post.frontmatter.title}</h1>
        </Link>
        <p>{post.frontmatter.date}</p>
        <p>{post.fields.readingTime.text}</p>
        {excerpt ? <p className="has-margin-top">{post.excerpt}</p> : null}
        {inCat ? (
          <p className="has-margin-top">
            <strong>
              In:{' '}
              <Link to={`/${kebabCase(post.frontmatter.category)}`}>
                {post.frontmatter.category}
              </Link>
            </strong>
          </p>
        ) : null}
        {inSubcat ? (
          <p className="has-margin-top">
            <strong>
              In:{' '}
              <Link to={`/${kebabCase(post.frontmatter.category)}`}>
                {post.frontmatter.category}
              </Link>
              {' / '}
              <Link to={`/${kebabCase(post.frontmatter.subcategory)}`}>
                {post.frontmatter.subcategory}
              </Link>
            </strong>
          </p>
        ) : null}
      </div>
    </Link>
  </div>
);

export default PostCard;
