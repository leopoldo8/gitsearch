import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MobileView, BrowserView } from 'react-device-detect';

import Brand from '@components/molecules/Brand';

import {
  Container, Title, Icon, BrowserViewStyle, MobileViewStyle
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

  const handleBrandClick = () => {
    history.push('/');
  }

  return (
    <Container>
      <MobileView style={MobileViewStyle}>
        <Icon className="icon-arrow" onClick={handleGoBack} />
        <Title>{ title }</Title>
      </MobileView>
      <BrowserView style={BrowserViewStyle}>
        <Brand size="small" onClick={handleBrandClick} />
      </BrowserView>
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
