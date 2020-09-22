import styled from 'styled-components';

import { SecondaryBlue, QuaternaryGray } from '@assets/styles/colors';
import { XXSmallDisplay, XXXXSmallDisplay, XXXXXSmallDisplay } from '@assets/styles/typography';

export const Container = styled.div`
  width: calc(100% - 16px);
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding-top: 17px;
`;

export const Name = styled.h1`
  ${XXSmallDisplay}
  color: ${SecondaryBlue};
`;

export const Description = styled.p`
  ${XXXXSmallDisplay}
  color: ${QuaternaryGray};
  margin: 0 16px 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
`;

export const Info = styled.p`
  ${XXXXXSmallDisplay}
  color: ${QuaternaryGray};
`;
