import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MobileView, BrowserView } from 'react-device-detect';

import Brand from '@components/molecules/Brand';

import {
  Container, Title, Icon, BrowserViewStyle, MobileViewStyle
} from './style';

/**
 * The Topbar Organism displays the topbar of the page.
 * It receives a `title`  which will be displayed in mobile,
 * and may also receive a `onGoBack` function which will be
 * called when arrow's tapped in mobile.
 */
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
