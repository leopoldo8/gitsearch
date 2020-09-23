import styled from 'styled-components';

import { White, Black, OctonaryGray } from '@assets/styles/colors';
import { MediumElevation } from '@assets/styles/elevations';
import { LargeDisplay } from '@assets/styles/typography';
import { desktop, monitor } from '@assets/styles/medias';

export const Container = styled.div`
  width: 100%;
  padding: 15px 16px 0;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0 auto;

  @media ${desktop} {
    ${MediumElevation}
    max-width: unset;
    width: 860px;
    max-width: 90%;
    background: ${White};
    margin: 40px auto;
    padding: 30px 20px;
  }
`;

export const TopContainer = styled.div`
  @media ${desktop} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 32px;
    border-bottom: 1px solid ${OctonaryGray};
    margin-bottom: 36px;
  }

  @media ${monitor} {
    padding: 0 50px 32px 30px;
  }
`;

export const Title = styled.h1`
  ${LargeDisplay}
  color: ${Black};
`;

export const SearchContainer = styled.div`
  margin-bottom: 42px;

  @media ${desktop} {
    margin: 0;
    max-height: 35px;
    width: 200px;
  }

  @media ${monitor} {
    width: 245px;
  }
`;
