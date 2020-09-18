import React from 'react';

import Button from '@components/molecules/Button';
import SearchInput from '@components/molecules/SearchInput';

import {
  Container,
  ButtonsContainer
} from './style';

const Search = () => {
  return (
    <Container>
      <SearchInput />
      <ButtonsContainer>
        <Button label="Ver Todos" />
        <Button label="Buscar" type="secondary" />
      </ButtonsContainer>
    </Container>
  );
}

export default Search;
