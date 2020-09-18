import React from 'react';
import PropTypes from 'prop-types';

import LogoIMG from './style';

const LogoSVG = '/static/images/Logo.svg';

/**
 * The Logo Atom displays the website logo.
 * It could be in two different sizes: large or small.
 */
const Logo = ({ size }) => (
  <LogoIMG src={LogoSVG} size={size} />
);

Logo.propTypes = {
  size: PropTypes.oneOf(['large', 'small'])
};

Logo.defaultProps = {
  size: 'large'
};

export default Logo;
