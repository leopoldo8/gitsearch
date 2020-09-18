import styled from 'styled-components';

import { FadeInFromTop } from '@assets/styles/transitions';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 65px;
  max-width: 297px;
  margin: 0 auto;

  ${props => FadeInFromTop(props.loaded)}
`;

export const BrandContainer = styled.div`
  margin-bottom: 54px;
`;
