import styled from 'styled-components';

import { tablet } from '@assets/styles/medias';
import { XXXSmallDisplay, SmallParagraph } from '@assets/styles/typography';
import { PrimaryGray, Placeholder, Error, White, SenaryGray } from '@assets/styles/colors';

export const Input = styled.input`
  ${XXXSmallDisplay}
  height: ${props => {
    switch (props.size) {
      default:
      case 'medium':
        return '30px';
      case 'large':
        return '35px';
    }
  }};
  background: ${White};
  outline: 0;
  padding: 6px;
  width: 100%;
  border: 1px solid ${PrimaryGray};
  box-sizing: border-box;
  border-radius: 4px;

  @media ${tablet} {
    border-color: ${SenaryGray};
    ${props => props.size === "medium" && `
      height: 40px;
    `}
    ${props => !props.hasIcon && `
      padding-left: 24px;
    `}
  }

  ${props => props.error && `
    border-color: ${Error};
  `}

  ${props => props.hasIcon && `
    padding-left: 39px;
  `}

  &::placeholder {
    ${SmallParagraph}
    color: ${Placeholder};
  }
`;

export const ErrorLabel = styled.p`
  margin-top: 8px;
  ${XXXSmallDisplay}
  color: ${Error};
  line-height: 16px;
`;

export const Container = styled.div`
  position: relative;
`

export const Icon = styled.i`
  position: absolute;
  top: 8px;
  left: 14px;
  font-size: 16px;
`;
