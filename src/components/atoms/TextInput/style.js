import styled from 'styled-components';
import { SmallParagraph, Label } from '@assets/styles/typography';
import { PrimaryGray, Placeholder, Error, White } from '@assets/styles/colors';

export const Input = styled.input`
  ${SmallParagraph}
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

  ${props => props.error && `
    border-color: ${Error};
  `}

  &::placeholder {
    ${Label}
    color: ${Placeholder};
  }
`;

export const ErrorLabel = styled.p`
  margin-top: 8px;
  ${SmallParagraph}
  color: ${Error};
  line-height: 16px;
`;
