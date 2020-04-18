import '../components/main-style.scss';

import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    <div className="not-found-box">
      <h1 className="has-text-centered is-title is-size-1 is-uppercase">
        Page not found
      </h1>
      <p className="has-text-centered is-size-3">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
