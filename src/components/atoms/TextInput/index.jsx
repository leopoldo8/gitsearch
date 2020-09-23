import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, ErrorLabel, Icon } from './style';

/**
 * The TextInput Atom has two different sizes: medium (default) or small.
 * You can display an icon inside the input using the icon prop.
 * You can also define an error message using the error prop.
 * It dynamically passes the props to the HTML input element, so you can use any property that an HTML <input> would.
 */
const TextInput = ({ title, icon, error, ...props }) => {
  return (
    <Container>
      {icon ? (
        <Icon className={`icon-${icon}`} />
      ) : null}
      <Input
        error={error}
        hasIcon={icon}
        {...props}
      />
      {error && typeof error === 'string' ? (
        <ErrorLabel>
          { error }
        </ErrorLabel>
      ) : null}
    </Container>
  )
}

TextInput.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.oneOf(['medium', 'large']),
  icon: PropTypes.string
}

TextInput.defaultProps = {
  error: null,
  size: 'medium',
  icon: ''
}

export default TextInput;
