import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  Container, Title, Icon
} from './style';

const TopBar = ({ title, onGoBack }) => {
  const history = useHistory();

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      history.goBack();
    }
  }

  return (
    <Container>
      <Icon className="icon-arrow" onClick={handleGoBack} />
      <Title>{ title }</Title>
    </Container>
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  onGoBack: PropTypes.func
}

TopBar.defaultProps = {
  onGoBack: null
}

export default TopBar;
