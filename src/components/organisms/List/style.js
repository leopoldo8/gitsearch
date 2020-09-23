import styled from 'styled-components';

import { SeptenaryGray } from '@assets/styles/colors';
import { desktop, monitor } from '@assets/styles/medias';
import { XXXSmallDisplay } from '@assets/styles/typography';

export const ListElement = styled.ul`
  padding-bottom: 40px;

  ${props => !props.verticalDesktop && `
    @media ${desktop} {
      display: grid;
      grid-template-columns: 140px 140px 140px 140px;
      border-left: 1px solid ${SeptenaryGray};
      padding: 0;
      margin: 0 auto;
      width: 540px;
    }

    @media ${monitor} {
      grid-template-columns: 140px 140px 140px 140px 140px;
      width: 700px;
    }
  `}
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  @media (-webkit-min-device-pixel-ratio: 2) {
    border-width: 0.5px;
  }

  ${({ isLastItem }) => isLastItem && `
    border: none;
  `}

  ${props => !props.verticalDesktop && `
    @media ${desktop} {
      border: none;
      border-top: 1px solid ${SeptenaryGray};
      border-right: 1px solid ${SeptenaryGray};
      border-bottom: 1px solid ${SeptenaryGray};
    }
  `}
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndListText = styled.p`
  text-align: center;
  margin-top: 24px;
  ${XXXSmallDisplay}
`;
