import React from 'react';

import TextInput from '@components/atoms/TextInput';

/**
 * The SearchInput Molecule displays the search input
 * used in home page and users list.
 */
const SearchInput = ({ ...props }) => (
  <TextInput placeholder="Pesquisar..." {...props} />
);

export default SearchInput;
