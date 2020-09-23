import styled from 'styled-components';

import { LargeDisplay } from '@assets/styles/typography';
import { Black } from '@assets/styles/colors';

export const Title = styled.h1`
  ${LargeDisplay}
  color: ${Black};
  margin-top: 37px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  ${props => props.size === 'small' && `
    flex-flow: row nowrap;
    justify-content: center;

    ${Title} {
      margin: 0;
      font-size: 20px;
      line-height: 22px;
      margin-left: 4px;
    }
  `}

  ${props => props.onClick && `
    cursor: pointer;
  `}
`;
