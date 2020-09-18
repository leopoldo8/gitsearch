import React from 'react';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { StyledButton } from './style';

/**
 * The Button Atom can be primary or secondary using its type prop
 * You also can define its label and whether the loader is displayed or not
 * It dynamically passes the props to the HTML element, so you can use any property that an HTML <button> would.
 */
const Button = ({ type, label, loading, ...props }) => {
  const Content = () => {
    if (loading)
      return <Loader />;

    return label;
  }

  return (
    <StyledButton type={type} loading={loading ? 1 : 0} {...props}>
      <Content />
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool
}

Button.defaultProps = {
  type: 'primary',
  loading: false
}

export default Button;
