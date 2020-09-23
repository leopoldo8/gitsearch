import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: 19px;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: center;
  width: 100%;

  button:first-child {
    margin-left: 22px;
  }
`;
