import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-center font-bold text-4xl">404: PAGE NOT FOUND</h1>
  </Layout>
);

export default NotFoundPage;
