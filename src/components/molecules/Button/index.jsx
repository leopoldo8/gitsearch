import React from 'react';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { StyledButton } from './style';

/**
 * The Button Atom can be primary or secondary using its schema prop
 * You also can define its label and whether the loader is displayed or not
 * It dynamically passes the props to the HTML button element, so you can use any property that an HTML <button> would.
 */
const Button = ({ schema, label, loading, ...props }) => {
  const Content = () => {
    if (loading)
      return <Loader />;

    return label;
  }

  return (
    <StyledButton schema={schema} loading={loading ? 1 : 0} {...props}>
      <Content />
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  schema: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool
}

Button.defaultProps = {
  schema: 'primary',
  loading: false
}

export default Button;
