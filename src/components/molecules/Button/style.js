import styled from 'styled-components';
import { darken } from 'polished';

import { PrimaryColor, White, PrimaryGreen } from '@assets/styles/colors';
import { XSmallDisplay } from '@assets/styles/typography';

const getColorsByType = type => {
  if (type === 'secondary')
    return {
      color: White,
      background: PrimaryGreen
    }

  return {
    color: White,
    background: PrimaryColor
  }
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;
  transition: .2s;
  border-radius: 4px;

  ${XSmallDisplay}

  ${props => `
    color: ${getColorsByType(props.type).color};
    background: ${getColorsByType(props.type).background};
  `}

  ${props => props.loading ?
  `
    pointer-events: none;
  ` : `
    &:hover, &:focus {
      background: ${darken(.04, getColorsByType(props.type).background)}
    }
  `}

  &:active {
    background: ${props => darken(.08, getColorsByType(props.type).background)}
  }
`;
