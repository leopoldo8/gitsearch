import styled from 'styled-components';

import { desktop, monitor } from '@assets/styles/medias';
import { MediumElevation } from '@assets/styles/elevations';
import { Display, Paragraph, XXSmallDisplay } from '@assets/styles/typography';
import {
  SecondaryColor, TertiaryGray, PrimaryGray, White, Black, NonaryGray, TernaryGray
} from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  ${({ full }) => full && `
    height: 100vh;
    justify-content: center;
  `}

  @media ${desktop} {
    ${MediumElevation}
    width: 860px;
    max-width: 90%;
    background: ${White};
    margin: 40px auto 0;
    min-height: calc(100vh - 101px);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media ${desktop} {
    align-items: flex-end;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media ${desktop} {
    flex-flow: row nowrap;
    align-self: flex-start;
    margin-left: 13px;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 145px;
  margin-bottom: -103px;
  object-fit: cover;

  @media ${desktop} {
    height: 200px;
    margin-bottom: -127px;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid ${TertiaryGray};
  margin-bottom: 10px;

  @media ${desktop} {
    margin: 0;
    margin-right: 20px;
    width: 170px;
    height: 170px;
  }

  @media ${monitor} {
    margin-right: 36px;
  }
`;

export const Name = styled.h1`
  ${Display}
  color: ${SecondaryColor};

  @media ${desktop} {
    color: ${Black};
    font-size: 18px;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${monitor} {
    font-size: 24px;
  }
`;

export const Login = styled.h2`
  ${Paragraph}
  color: ${PrimaryGray};
  margin-bottom: 20px;

  i {
    font-size: 10px;
    margin-right: 7px;
  }

  @media ${desktop} {
    margin: 0;
    margin-top: -5px;
    color: ${NonaryGray};

    i {
      font-size: 12px;
      margin-right: 5px;

      &:before {
        color: ${NonaryGray};
      }
    }
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media ${desktop} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const SocialBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media ${desktop} {
    width: auto;
    margin: 0;
    padding-top: 16px;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  @media ${desktop} {
    flex-flow: row nowrap;
    margin-top: -53px;
    min-height: calc(100vh - 300px);
  }
`;

export const SocialItem = styled.div`
  width: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const SocialLabel = styled.h3`
  ${XXSmallDisplay}
  color: ${SecondaryColor};
`;

export const SocialNumber = styled(SocialLabel)`
  margin-bottom: 7px;

  i {
    font-size: 20px;
    margin-right: 7px;
    vertical-align: text-bottom;
  }

  i.icon-person {
    font-size: 18px;
  }

  i.icon-folder {
    vertical-align: text-top;
  }
`;

export const TabsSelectorContainer = styled.div`
  width: 100%;

  @media ${desktop} {
    max-width: 200px;
    padding-top: 80px;
    border-right: 1px solid ${TernaryGray};
  }
`;

export const TabsViewContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  @media ${desktop} {
    padding: 0 39px 0 60px;
    width: calc(100% - 200px);
  }
`;
