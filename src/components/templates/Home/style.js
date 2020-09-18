import styled from 'styled-components';

import { Display } from '@assets/styles/typography';
import { Black } from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 65px;
  max-width: 297px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${Display}
  color: ${Black};
  margin-top: 37px;
`;
