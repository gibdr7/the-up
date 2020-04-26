import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import { CC, CardEdge } from './CreditCardContainer';

interface Props {
  creditCard?: CardEdge;
}


export const CreditCard = ({ creditCard }: Props) => {
  const { allMarkdownRemark }: CC = useStaticQuery(graphql`
    query creditCard {
      allMarkdownRemark(
        sort: { fields: [frontmatter___priority], order: DESC }
        filter: { fields: { collection: { eq: "credit_cards" } } }
      ) {
        edges {
          node {
            html
            fields {
              collection
            }
            frontmatter {
              name
              bank
              referral
              bonus
              priority
            }
          }
        }
      }
    }
  `);

  const card = creditCard ?? allMarkdownRemark.edges[0];

  return (
    <div className="card">
      <a href={card.node.frontmatter.referral}>
        <div className="card-image">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: card.node.html }}
          />
          <FaIdCard />
        </div>
        <div className="card-meta">
          <div>{card.node.frontmatter.bank} {card.node.frontmatter.name}</div>
          <div>Current Offer: {card.node.frontmatter.bonus}</div>
        </div>
      </a>
    </div>
  );
};
