import styled from 'styled-components';

import { desktop } from '@assets/styles/medias';
import { SecondaryBlue, QuaternaryGray, LanguageColor } from '@assets/styles/colors';
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

  @media ${desktop} {
    width: 100%;
    padding-right: 16px;
    height: 35px;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;

  @media ${desktop} {
    justify-content: center;
    flex-flow: column nowrap;
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  @media ${desktop} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 16px 13px;
    box-sizing: border-box;
  }
`;

export const Info = styled.p`
  ${XXXXXSmallDisplay}
  color: ${QuaternaryGray};

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
    background: ${LanguageColor};
    display: inline-block;
  }

  @media ${desktop} {
    line-height: 18px;
  }
`;
