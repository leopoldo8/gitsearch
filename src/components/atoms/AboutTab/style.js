import styled from 'styled-components';

import { XSmallDisplay, SmallDisplay } from '@assets/styles/typography';
import { SecondaryColor } from '@assets/styles/colors';

export const Container = styled.div`
  padding: 30px 0;
`;

export const Subtitle = styled.h2`
  ${SmallDisplay}
  color: ${SecondaryColor};
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 30px;
`;

export const ExtraInfo = styled.h3`
  ${XSmallDisplay}
  color: ${SecondaryColor};
  margin-bottom: 18px;

  i {
    font-size: 18px;
    margin-right: 13px;
  }
`;
