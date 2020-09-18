import React, { useState, useEffect } from 'react';

import Brand from '@components/molecules/Brand';
import Search from '@components/organisms/Search';

import {
  Container, BrandContainer
} from './style';

const HomeTemplate = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <Container loaded={loaded}>
      <BrandContainer>
        <Brand />
      </BrandContainer>
      <Search />
    </Container>
  );
}

export default HomeTemplate;
