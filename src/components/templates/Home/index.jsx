import React from 'react';

import Brand from '@components/molecules/Brand';
import Search from '@components/organisms/Search';

import {
  Container, BrandContainer
} from './style';

const HomeTemplate = () => {
  return (
    <Container>
      <BrandContainer>
        <Brand />
      </BrandContainer>
      <Search />
    </Container>
  );
}

export default HomeTemplate;
