import React, { useState, useEffect } from 'react';

import PageHead from '@components/atoms/PageHead';
import Brand from '@components/molecules/Brand';
import Search from '@components/organisms/Search';

import {
  Container, BrandContainer, Wrapper
} from './style';

const HomeTemplate = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <Wrapper>
      <PageHead defaultMeta />
      <Container loaded={loaded}>
        <BrandContainer>
          <Brand />
        </BrandContainer>
        <Search />
      </Container>
    </Wrapper>
  );
}

export default HomeTemplate;
