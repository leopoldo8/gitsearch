import React from 'react';
import PropTypes from 'prop-types';

import Logo from '@components/atoms/Logo';

import {
  Container,
  Title
} from './style';

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
