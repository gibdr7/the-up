import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostList/PostList';
import { AllMarkdownProps } from '../@types/context';

const blogListTemplate = ({ data, pageContext }: AllMarkdownProps) => {
  const { allMarkdownRemark } = data;

  return <PostList posts={allMarkdownRemark.edges} pageContext={pageContext} />;
};

export default blogListTemplate;

export const query = graphql`
  query blogListTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
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
