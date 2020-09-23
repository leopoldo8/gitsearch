import styled from 'styled-components';

import { XXSmallDisplay } from '@assets/styles/typography';
import { SecondaryBlack, PrimaryGray } from '@assets/styles/colors';

export const Container = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${PrimaryGray};
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${XXSmallDisplay}
  color: ${SecondaryBlack};
`;

export const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;
