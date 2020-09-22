import styled from 'styled-components';

import { Display, Paragraph, XXSmallDisplay } from '@assets/styles/typography';
import { SecondaryColor, TertiaryGray, PrimaryGray } from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  ${({ full }) => full && `
    height: 100vh;
    justify-content: center;
  `}
`;

export const Banner = styled.img`
  width: 100%;
  height: 145px;
  margin-bottom: -103px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid ${TertiaryGray};
  margin-bottom: 10px;
`;

export const Name = styled.h1`
  ${Display}
  color: ${SecondaryColor};
`;

export const Login = styled.h2`
  ${Paragraph}
  color: ${PrimaryGray};
  margin-bottom: 20px;

  i {
    font-size: 10px;
    margin-right: 7px;
  }
`;

export const SocialBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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

export const TabsViewContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;
