import styled from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case 'large':
      return '64px';

    case 'medium':
    default:
      return '32px';
  }
}

export const LoaderIMG = styled.img`
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  user-select: none;
  pointer-events: none;
`;
