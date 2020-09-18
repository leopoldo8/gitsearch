import styled from 'styled-components';

export default styled.img`
  ${({ size }) => {
    const dimension = size === 'small' ? '50px' : '140px';
    return `
      width: ${dimension};
      height: ${dimension};
    `;
  }}
`;
