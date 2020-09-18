import styled from 'styled-components';

import { Display } from '@assets/styles/typography';
import { Gray900 } from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 65px;
`;

export const Title = styled.h1`
  ${Display}
  color: ${Gray900};
  margin-top: 37px;
`;
