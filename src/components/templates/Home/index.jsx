import React from 'react';

import Logo from '@components/atoms/Logo';

import {
  Container,
  Title
} from './style';

const HomeTemplate = () => {

  return (
    <Container>
      <Logo />
      <Title>GitSearch</Title>
    </Container>
  );
}

export default HomeTemplate;
