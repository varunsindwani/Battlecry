import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="bg-blue-600 max-w-full">
    <nav>
      <h1 className="text-white text-4xl font-bold p-8">
        {siteTitle}
      </h1>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
