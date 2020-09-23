import styled from 'styled-components';

import { tablet } from '@assets/styles/medias';
import { FadeInFromTop } from '@assets/styles/transitions';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 65px;
  max-width: 297px;

  ${props => FadeInFromTop(props.loaded)}

  @media ${tablet} {
    align-self: center;
    padding-top: 0;
    max-width: 347px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const BrandContainer = styled.div`
  margin-bottom: 54px;
`;
