import React from 'react';

import Logo from '@components/atoms/Logo';
import Search from '@components/organisms/Search';

import {
  Container,
  Title
} from './style';

const HomeTemplate = () => {

  return (
    <Container>
      <Logo />
      <Title>GitSearch</Title>
      <Search origin="Home" />
    </Container>
  );
}

export default HomeTemplate;
