import './tags.scss'

import { Link, graphql } from 'gatsby'

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

const TagsPage = ({
  pageContext,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout title="Tags">
      <div className="tag-page-container">
        <div className="breadcrumb-container">
          <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
        </div>
        <div className="tagsContainer has-text-centered">
          <h1 className="is-title is-size-1">Tags</h1>
          <ul className="has-text-weight-bold">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
