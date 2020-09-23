import styled from 'styled-components';

import { Label } from '@assets/styles/typography';
import { desktop, mobile } from '@assets/styles/medias';
import { Black, PrimaryHazeBlue, SecondaryHazeBlue, PrimaryBlue } from '@assets/styles/colors';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 50px;
  background: ${PrimaryHazeBlue};

  @media ${desktop} {
    flex-flow: column nowrap;
    min-height: 100px;
  }
`;

export const Item = styled.li`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${Label}
  color: ${Black};

  @media ${mobile} {
    &:not(:last-child) {
      border-right: 1px solid ${SecondaryHazeBlue};
    }
  }

  ${({ selected }) => selected && `
    height: calc(100% - 3px);
    border-bottom: 3px solid ${PrimaryBlue};
  `}

  @media ${desktop} {
    width: 100%;
    height: 50px;
    border: none;

    &:not(:last-child) {
      border-bottom: 1px solid ${SecondaryHazeBlue};
    }

    ${({ selected }) => selected && `
      width: calc(100% - 3px);
      border-right: 3px solid ${PrimaryBlue};
    `}
  }
`;
