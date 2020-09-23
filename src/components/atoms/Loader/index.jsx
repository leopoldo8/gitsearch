import React from 'react';
import PropTypes from 'prop-types';

import { LoaderIMG } from './style';

const LoaderSVG = '/static/images/Loader.svg';
const DarkLoaderSVG = '/static/images/Dark-Loader.svg';

/**
 * The Loader Atom displays a loader.
 * It has 2 different sizes using the size prop: large or medium.
 * It also has two themes: dark or light.
 */
const Loader = ({ size, theme }) => (
  <LoaderIMG src={theme === 'dark' ? DarkLoaderSVG : LoaderSVG} draggable={false} size={size} />
);

Loader.propTypes = {
  size: PropTypes.oneOf(['large', 'medium']),
  theme: PropTypes.oneOf(['dark', 'light'])
}

Loader.defaultProps = {
  size: 'medium',
  theme: 'light'
}

export default Loader;
