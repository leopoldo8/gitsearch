import styled from 'styled-components';
import { darken } from 'polished';

import { PrimaryColor, White, PrimaryGreen } from '@assets/styles/colors';
import { XSmallDisplay } from '@assets/styles/typography';

const getColorsBySchema = schema => {
  if (schema === 'secondary')
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
    color: ${getColorsBySchema(props.schema).color};
    background: ${getColorsBySchema(props.schema).background};
  `}

  ${props => props.loading ?
  `
    pointer-events: none;
  ` : `
    &:hover, &:focus {
      background: ${darken(.04, getColorsBySchema(props.schema).background)}
    }
  `}

  &:active {
    background: ${props => darken(.08, getColorsBySchema(props.schema).background)}
  }
`;
