import React from 'react';

import Router from './router';

import { UserProvider } from '@contexts/userContext';

import GlobalStyles from '@modules/globalStyles';

const GitSearch = () => {

  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
};

export default GitSearch;
