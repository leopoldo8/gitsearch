import React from 'react';

import TextInput from '@components/atoms/TextInput';

const SearchInput = ({ ...props }) => (
  <TextInput placeholder="Pesquisar..." {...props} />
);

export default SearchInput;
