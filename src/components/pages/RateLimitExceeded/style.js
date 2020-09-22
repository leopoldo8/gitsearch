import styled from 'styled-components';

import { FadeInFromTop } from '@assets/styles/transitions';
import { Display } from '@assets/styles/typography';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  padding: 0 16px;
  box-sizing: border-box;

  ${({ loaded }) => FadeInFromTop(loaded)}
`;

export const Text = styled.h1`
  ${Display}
  text-align: center;
`;
