import React from 'react';
import PropTypes from 'prop-types';

import Logo from '@components/atoms/Logo';

import {
  Container,
  Title
} from './style';

/**
 * The Brand Molecule displays the website brand.
 * It could be in two different sizes: large or small,
 * and may has a click listener.
 */
const Brand = ({ size, onClick }) => (
  <Container size={size} onClick={onClick}>
    <Logo size={size} />
    <Title>GitSearch</Title>
  </Container>
);

Brand.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  onClick: PropTypes.func
}

Brand.defaultProps = {
  size: 'large',
  onClick: null
}

export default Brand;
