import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/**
 * The PageHead Atom can add a subtitle to the page title into a specific page,
 * as well as a image and/or description.
 */
const PageHead = ({ title: titleProp, image, description, children, defaultMeta }) => {
  const title = defaultMeta ? "GitSearch" : `GitSearch - ${titleProp}`;
  return (
    <Helmet>
      <title>{ title }</title>
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      {children}
    </Helmet>
  );
}

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
  defaultMeta: PropTypes.bool
};

PageHead.defaultProps = {
  children: [],
  image: '%PUBLIC_URL%/static/favicon/android-chrome-512x512.png',
  description: 'Encontre usuários do GitHub',
  defaultMeta: false
};

export default PageHead;
