import styled from 'styled-components';

import { desktop } from '@assets/styles/medias';
import { SecondaryGray, SecondaryColor } from '@assets/styles/colors';
import { SmallParagraph } from '@assets/styles/typography';

export const Container = styled.div`
  width: calc(100% - 16px);
  height: 75px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 auto;

  @media ${desktop} {
    width: 100%;
    justify-content: center;
    flex-flow: column nowrap;
    height: 215px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 22px;
  border: 5px solid ${SecondaryGray};

  @media ${desktop} {
    width: 100px;
    height: 100px;
    margin: 0 0 10px 0;
  }
`;

export const Name = styled.h1`
  ${SmallParagraph}
  font-weight: 600;
  color: ${SecondaryColor};

  @media ${desktop} {
    font-size: 20px;
    max-width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 36px;
  }
`;
