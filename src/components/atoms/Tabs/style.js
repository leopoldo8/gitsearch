import styled from 'styled-components';

import { Black, PrimaryHazeBlue, SecondaryHazeBlue, PrimaryBlue } from '@assets/styles/colors';
import { Label } from '@assets/styles/typography';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 50px;
  background: ${PrimaryHazeBlue};
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

  &:not(:last-child) {
    border-right: 1px solid ${SecondaryHazeBlue};
  }

  ${({ selected }) => selected && `
    height: calc(100% - 3px);
    border-bottom: 3px solid ${PrimaryBlue};
  `}
`;
