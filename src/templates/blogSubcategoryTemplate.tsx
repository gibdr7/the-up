import './categoryPage.scss';

import { Link, graphql } from 'gatsby';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/PostCard/postCard';
import { titleSlug } from '../utils/formatter';
import { AllMarkdownProps } from '../@types/context';

const blogSubcategoryTemplate = ({ data, pageContext }: AllMarkdownProps) => {
  const { allMarkdownRemark } = data;
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout title={pageContext.category}>
      <div>
        <div className="category-page-container">
          <div className="breadcrumb-container">
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
          </div>
          <div className="tile is-ancestor">
            {allMarkdownRemark.edges.map(({ node }, _) => (
              <PostCard
                key={node.frontmatter.title}
                post={node}
                excerpt
                inSubcat
              />
            ))}
          </div>

          <div className="category-container has-text-centered">
            {' '}
            <h1>Topics in {pageContext.category}:</h1>
            {pageContext.allSubcategories.map((subcat, _) => (
              <Link
                key={subcat.fieldValue}
                to={`${titleSlug(pageContext.category)}/${titleSlug(subcat)}`}
              >
                {subcat}
              </Link>
            ))}
          </div>
        </div>
        <div className="pageNumbers has-text-centered">
          <ul className="numbers has-text-centered">
            {Array.from({ length: pageContext.numPages }).map((_, i) => {
              const index = i + 1;
              const subcategory = titleSlug(pageContext.subcategory);
              const link =
                index === 1
                  ? `/${subcategory}`
                  : `/${subcategory}/page/${index}`;

              return (
                <li key={index}>
                  {pageContext.currentPage === index ? (
                    <span>{index}</span>
                  ) : (
                    <Link className="pageNumberLink" to={link}>
                      {index}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default blogSubcategoryTemplate;

export const query = graphql`
  query blogPostsListBySubcategory(
    $subcategory: String
    $skip: Int!
    $limit: Int!
  ) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { subcategory: { eq: $subcategory } } }
      limit: $limit
      skip: $skip
    ) {
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
            subcategory
          }
        }
      }
    }
  }
`;
