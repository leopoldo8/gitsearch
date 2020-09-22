import styled from 'styled-components';

import { SecondaryGray, SecondaryColor } from '@assets/styles/colors';
import { Label } from '@assets/styles/typography';

export const Container = styled.div`
  width: calc(100% - 16px);
  height: 75px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 22px;
  border: 5px solid ${SecondaryGray};
`;

export const Name = styled.h1`
  ${Label}
  font-weight: 600;
  color: ${SecondaryColor};
`;
