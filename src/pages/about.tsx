import '../components/About/style.scss';

import React from 'react';
import AboutComponent from '../components/About/about';
import ContactComponent from '../components/Contact/contact';
import Layout from '../components/layout';
import { CreditCardContainer } from '../components/CreditCards/CreditCardContainer';


const About = () => (
  <Layout title="About">
    <div className="columns">
      <ContactComponent />
      <AboutComponent />
    </div>
    <CreditCardContainer numberOfCards={5} />
  </Layout>
);



export default About;
