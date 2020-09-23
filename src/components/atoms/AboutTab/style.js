import styled from 'styled-components';

import { XSmallDisplay, SmallDisplay } from '@assets/styles/typography';
import { SecondaryColor } from '@assets/styles/colors';
import { desktop } from '@assets/styles/medias';

export const Container = styled.div`
  padding: 30px 0;

  @media ${desktop} {
    padding: 40px 0;
  }
`;

export const Subtitle = styled.h2`
  ${SmallDisplay}
  color: ${SecondaryColor};
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 30px;

  @media ${desktop} {
    margin-bottom: 90px;
  }
`;

export const ExtraInfo = styled.h3`
  ${XSmallDisplay}
  color: ${SecondaryColor};
  margin-bottom: 18px;

  i {
    font-size: 18px;
    margin-right: 13px;
  }

  a {
    color: ${SecondaryColor};
  }

  @media ${desktop} {
    font-size: 18px;

    i {
      font-size: 15px;
      margin-right: 7px;
    }
  }
`;
