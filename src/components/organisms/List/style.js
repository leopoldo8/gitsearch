import styled from 'styled-components';

import { XXXSmallDisplay } from '@assets/styles/typography';

export const ListElement = styled.ul`
  padding-bottom: 40px;
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  @media (-webkit-min-device-pixel-ratio: 2) {
    border-width: 0.5px;
  }

  ${({ isLastItem }) => isLastItem && `
    border: none;
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
