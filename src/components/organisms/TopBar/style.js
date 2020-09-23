import styled from 'styled-components';

import { desktop } from '@assets/styles/medias';
import { XXSmallDisplay } from '@assets/styles/typography';
import { LargeElevation } from '@assets/styles/elevations';
import { SecondaryBlack, PrimaryGray, White } from '@assets/styles/colors';

export const Container = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${PrimaryGray};
  margin: 0 auto;

  @media ${desktop} {
    ${LargeElevation}
    height: 60px;
    background: ${White};
    border: none;
    width: 100%;
  }
`;

export const Title = styled.h1`
  ${XXSmallDisplay}
  color: ${SecondaryBlack};
`;

export const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

export const MobileViewStyle = {
  display: 'flex',
  alignItems: 'center'
}

export const BrowserViewStyle = {
  width: 860,
  margin: '0 auto',
  display: 'flex',
  padding: '0 20px',
  boxSizing: 'border-box',
  maxWidth: '90%'
}
