import '../pages/tags.scss';

import { Link, graphql } from 'gatsby';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/PostCard/postCard';
import { AllMarkdownProps } from '../@types/context';


const Tags = ({ pageContext, data }: AllMarkdownProps) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
    // eslint-disable-next-line indent
    } tagged with "${tag}"`;
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout title={pageContext.tag}>
      <div className="tag-page-container">
        <div className="breadcrumb-container">
          <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
        </div>
        <div className="tagsContainer has-text-centered">
          <h1 className="is-title is-size-3">{tagHeader}</h1>
          <ul className="has-text-weight-bold">
            {edges.map(({ node }) => (
              <PostCard
                key={node.frontmatter.title}
                post={node}
                excerpt
                inCat
              />
            ))}
          </ul>
          {/*
                  This links to a page that does not yet exist.
                  You'll come back to it!
                */}
          <Link className="has-text-weight-bold" to="/tags">
            All tags
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            pagePath
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;
