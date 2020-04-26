import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CreditCard } from './CreditCard';
import './CreditCard.scss';


interface CreditCard {
  name: string;
  bank: string;
  referral: string;
  bonus: string;
  priority: number;
}

export interface CardEdge {
  node: {
    frontmatter: CreditCard;
  };
}

export interface CC {
  [key: string]: {
    [key: string]: CardEdge[];
  };
}

interface Props {
  numberOfCards: number;
}

export const CreditCardContainer = ({ numberOfCards }: Props) => {
  const { allMarkdownRemark }: CC = useStaticQuery(graphql`
      query creditCards {
        allMarkdownRemark(
          sort: { fields: [frontmatter___priority], order: DESC }
          filter: { fields: { collection: { eq: "credit_cards" } } }
        ) {
          edges {
            node {
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

  const cardEdges: CardEdge[] = allMarkdownRemark.edges;
  const numCards: number = Math.min(numberOfCards, cardEdges.length);
  const cardsToShow: CardEdge[] = cardEdges.slice(0, numCards);


  return (
    <div className="cards">
      <div className="cards-wrapper">
        <div className="cards-intro">
          <div className="title">Top offers from our partners</div>
          {/* <button type="button" className="chose-modal-toggle" id="js-modal-toggle">How we chose</button>
          <div className="chose-content" id="js-modal-content">
            <span className="chose-content__close-icon" id="js-close-content">✕</span>
            <div className="chose-content__title">How we chose these cards</div>
            Our points-obsessed staff uses a plethora of credit cards on a daily basis.
            If anyone on our team wouldn&apos;t recommend an offer to a friend or family member,
            we wouldn&apos;t recommend it on The Points Guy either. Our opinions are our own,
            and have not been reviewed, approved, or endorsed by our advertising partners.
          </div> */}
        </div>
        <div className="cards-main">
          {
            cardsToShow.map((card: CardEdge) => (
              <CreditCard creditCard={card} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
