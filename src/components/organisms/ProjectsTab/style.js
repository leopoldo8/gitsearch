import styled from 'styled-components';

import { desktop } from '@assets/styles/medias';

export const Container = styled.div`
  width: 100%;
  padding: 13px 0;

  @media ${desktop} {
    padding: 23px 0;
  }
`;
