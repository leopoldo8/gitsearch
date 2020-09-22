import styled from 'styled-components';

import { LargeDisplay } from '@assets/styles/typography';
import { Black } from '@assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const Title = styled.h1`
  ${LargeDisplay}
  color: ${Black};
  margin-top: 37px;
`;
