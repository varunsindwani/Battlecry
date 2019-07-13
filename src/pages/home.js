import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
    <Layout>
      <SEO title="Home" />
      <div className="block mx-auto w-4/5 text-center p-2">
        <Image filename="war.png"/>
      </div>
      <Link to="/page-2/" className="text-center font-bold underline">Click to 404</Link>
    </Layout>
  );
  
  export default HomePage;
  