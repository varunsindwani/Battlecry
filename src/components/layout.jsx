import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px4 py-8 md:p-8 w-full">{children}</main>
      <footer className="bg-gray-800 max-w-full">
        <h1 className="text-white text-xl p-8">By Varun Sindwani</h1>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
