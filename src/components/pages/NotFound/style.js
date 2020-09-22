import styled from 'styled-components';

import { FadeInFromTop } from '@assets/styles/transitions';
import { SmallDisplay } from '@assets/styles/typography';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  ${({ loaded }) => FadeInFromTop(loaded)}
`;

export const Text = styled.h1`
  ${SmallDisplay}
  text-align: center;
`;
